"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
  type WheelEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  /* 접근성: 모션을 줄이도록 설정한 사용자에게는 스크롤 가로채기를 하지 않고
     처음부터 미디어를 펼친 상태로 보여줍니다. */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(mq.matches);
      if (mq.matches) {
        setScrollProgress(1);
        setMediaFullyExpanded(true);
        setShowContent(true);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1,
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1,
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener,
      );
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener,
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener,
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, reduceMotion]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  /* 모션축소 환경에서만: 스크롤 가로채기를 하지 않는 정적 히어로로 대체 */
  const staticMode = reduceMotion;

  /* 헤더가 확장 상태를 알 수 있도록 알림 (투명↔불투명 전환 판단용).
     스크롤을 조금이라도 시작하거나 정적 모드이면 헤더를 불투명으로 전환합니다. */
  useEffect(() => {
    const engaged = staticMode || mediaFullyExpanded || scrollProgress > 0.03;
    window.dispatchEvent(new CustomEvent("hero:expanded", { detail: engaged }));
  }, [staticMode, mediaFullyExpanded, scrollProgress]);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 900 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 500 : 400);
  const textTranslateX = reduceMotion
    ? 0
    : scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  /* ── 모바일 / 모션축소: 스크롤을 가로채지 않는 정적 풀블리드 히어로 ── */
  if (staticMode) {
    return (
      <div className="overflow-x-hidden bg-paper">
        <section className="relative flex h-[100svh] min-h-[520px] w-full flex-col justify-end overflow-hidden bg-deep">
          {mediaType === "video" ? (
            <video
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full origin-[35%_25%] scale-[1.2] object-cover"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
            />
          ) : (
            <Image
              src={mediaSrc}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/25 to-deep/45" />

          <Container className="relative z-10 pb-14">
            {date && (
              <p className="text-[0.72rem] font-medium tracking-[0.14em] text-paper/70">
                {date}
              </p>
            )}
            <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.3rem,11vw,3.4rem)] text-paper">
              {title}
            </h1>
          </Container>
        </section>

        <section className="flex w-full flex-col px-6 py-14 sm:px-10">
          {children}
        </section>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="overflow-x-hidden bg-paper transition-colors duration-700 ease-in-out"
    >
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-start">
        <div className="relative flex min-h-[100dvh] w-full flex-col items-center">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt=""
              width={1920}
              height={1080}
              className="h-screen w-screen"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div className="absolute inset-0 bg-deep/30" />
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-deep/70 via-deep/25 to-transparent" />
          </motion.div>

          <div className="container relative z-10 mx-auto flex flex-col items-center justify-start">
            <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
              <div
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transition-none"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: isMobileState ? "100vw" : "95vw",
                  maxHeight: isMobileState ? "94vh" : "85vh",
                  boxShadow: "0 24px 60px -12px rgba(31, 29, 25, 0.45)",
                }}
              >
                {mediaType === "video" ? (
                  <div className="relative h-full w-full overflow-hidden">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-full w-full origin-[30%_25%] scale-[1.18] object-cover"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                    <motion.div
                      className="absolute inset-0 bg-deep/35"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.55 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={mediaSrc}
                      alt={title || ""}
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-deep/40"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.6 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="relative z-10 mt-5 flex flex-col items-center text-center transition-none">
                  {date && (
                    <p
                      className="text-[0.78rem] font-medium tracking-[0.16em] text-paper/70"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && !reduceMotion && (
                    <p
                      className="mt-2 text-[0.8rem] font-light tracking-[0.04em] text-paper/60"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <h1
                className={`display relative z-10 flex w-full flex-col items-center justify-center gap-1 text-center text-[clamp(2.4rem,7vw,5rem)] text-paper transition-none ${
                  textBlend ? "mix-blend-difference" : "mix-blend-normal"
                }`}
              >
                <motion.span
                  className="block transition-none"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.span>
                {restOfTitle && (
                  <motion.span
                    className="block transition-none"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {restOfTitle}
                  </motion.span>
                )}
              </h1>
            </div>

            <motion.section
              className="flex w-full flex-col px-6 py-12 sm:px-10 lg:px-14 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
