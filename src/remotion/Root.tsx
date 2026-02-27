import { Composition } from 'remotion';
import { CourseTeaser } from './CourseTeaser';

const FPS = 30;
const DURATION = 18 * FPS;

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="CodexTeaser16x9"
        component={CourseTeaser}
        durationInFrames={DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{
          orientation: 'landscape' as const,
        }}
      />
      <Composition
        id="CodexTeaser9x16"
        component={CourseTeaser}
        durationInFrames={DURATION}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{
          orientation: 'portrait' as const,
        }}
      />
    </>
  );
};
