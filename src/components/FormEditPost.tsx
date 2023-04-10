import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { PostItemType, initialPostItem } from "../Type/PostItemType";
import { PostListType } from "../Type/PostListType";
import { useSelector } from "react-redux";
import store, { RootState } from "../store/store";
import { postAction } from "../constants/postAction.constant";

interface PropsFormEditPost {
  data: PostItemType;
  setEditId: (id: string) => void;
}

const FormEditPost = (props: PropsFormEditPost) => {
  const [postEdit, setPostEdit] = useState<PostItemType>(props.data);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refInput.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    store.dispatch({ type: postAction.EDIT_POST, payload: postEdit });
    props.setEditId("");
    e.preventDefault();
  };
  return (
    <div className='wrapper-modal'>
      <form onSubmit={handleSubmit} className='form-edit'>
        <label className='form-edit--label'>
          Title:
          <input
            className='form-edit--input'
            ref={refInput}
            type='text'
            value={postEdit.title}
            onChange={(event) =>
              setPostEdit({ ...postEdit, title: event.target.value })
            }
          />
        </label>
        <label className='form-edit--label'>
          Body:
          <input
            className='form-edit--input'
            type='text'
            value={postEdit.body}
            onChange={(event) =>
              setPostEdit({ ...postEdit, body: event.target.value })
            }
          />
        </label>
        <div className='form-edit__bottom'>
          <input
            className='form-edit--cancel'
            type='button'
            value='Cancel'
            onClick={() => props.setEditId("")}
          />
          <input className='form-edit--submit' type='submit' value='Edit' />
        </div>
      </form>
    </div>
  );
};

export default FormEditPost;
