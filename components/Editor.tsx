import React from 'react';
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';

export const Editor: React.FC = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Нажмите Tab для выбора инструмента',
      tools: {
        image: {
          class: ImageTool,
        },
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
