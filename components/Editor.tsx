import React from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void;
}

export const Editor: React.FC<EditorProps> = ({ onChange }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Нажмите Tab для выбора инструмента',
      tools: {
        image: {
          class: ImageTool,
        },
      },
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error('ERROR editor cleanup'));
    };
  }, []);

  return <div id="editor" />;
};
