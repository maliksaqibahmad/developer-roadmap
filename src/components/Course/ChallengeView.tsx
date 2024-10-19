import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../Resizable';
import { SqlCodeEditor } from '../SqlCodeEditor/SqlCodeEditor';
import type { ReactNode } from 'react';
import type { LessonFileType } from '../../lib/course';
import { LessonView } from './LessonView';

type ChallengeViewProps = {
  lesson: LessonFileType;
  children: ReactNode;
};

export function ChallengeView(props: ChallengeViewProps) {
  const { children, lesson } = props;

  const { frontmatter } = lesson;
  const { defaultValue, initSteps, expectedResults } = frontmatter;

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={60} minSize={20}>
        <LessonView>{children}</LessonView>
      </ResizablePanel>

      <ResizableHandle withHandle={true} />

      <ResizablePanel defaultSize={40} minSize={20}>
        <SqlCodeEditor
          defaultValue={defaultValue}
          initSteps={initSteps}
          expectedResults={expectedResults}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
