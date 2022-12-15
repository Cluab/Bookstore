import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const URl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PdyfTE71y2E1efEoC1wc/books';
// exporting api call using redux thunk
export const getPosts = createAsyncThunk('posts/getPosts', async () => fetch(URl).then((res) => res.json()));

// adding createSlice for handling promise different cases and storing fetched data
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },

  // disabling linters here for allowing the state to change freely depending on scenario
  extraReducers: {
    [getPosts.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      Object.entries(payload).forEach((book) => {
        state.list.push(
          {
            item_id: `${book[0]}`,
            title: book[1][0].title,
            author: book[1][0].author,
          },
        );
      });
      // eslint-disable-next-line no-param-reassign
      state.status = 'success';
    },
    [getPosts.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'failed';
    },
  },
  reducers: {
    deleteAction: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.list = payload;
    },
  },
});

// using axios for handling post and delete methods for database
export const createPost = (postData) => axios.post(URl, postData);
export const deletePost = (deleteData) => axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PdyfTE71y2E1efEoC1wc/books/${deleteData}`);

// exporting postsSlice as reducers
export default postsSlice.reducer;
// exporting delete call as an action
export const { deleteAction } = postsSlice.actions;
