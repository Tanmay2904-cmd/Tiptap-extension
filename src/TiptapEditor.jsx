import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import './App.css'; // Ensure App.css is imported for styling

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit, // Base features like bold, italic, etc.
      Link, // Enables linking
      Underline, // Enables underline support
    ],
    content: '<p>Start writing here...</p>',
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      <h2>Rich Text Editor</h2>

      {/* Toolbar */}
      <div className="toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          Underline
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          Blockquote
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet List
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          Ordered List
        </button>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .setLink({ href: prompt('Enter a URL') || '' })
              .run()
          }
          className={editor.isActive('link') ? 'is-active' : ''}
        >
          Add Link
        </button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        >
          Remove Link
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear Formatting
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="tiptap-editor" />
    </div>
  );
};

export default TiptapEditor;
