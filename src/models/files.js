/**
 * Created by cuteandroid on 2018/8/21.
 */
import { routerRedux } from 'dva/router'
import { StudentList,  DeleteStudent, Searchfiles } from '../services/login'
import { notification } from 'antd';

export default {

  namespace: 'files',

  state: {
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getSearchList({ payload }, { call, put }) {
      const response = yield call(Searchfiles, payload);
      console.log("Resp:", response)
      if (response.status === 200 ) {
        yield put({type: "saveList", payload: response.msg})
      } else {
        notification.error({
          message: `搜索失败，${response.msg}`,
        });
      }
    },
  
    *delete({ payload }, { call, put }) {
      const response = yield call(DeleteStudent, payload);
      console.log("Resp:", response)
      if (response.status === 200 ) {
      } else {
        notification.error({
          message: `删除失败，${response.msg}`,
        });
      };
      yield put({type: "getList"})
    },
    
  },

  reducers: {
    save(state, action) {
      let newState = { ...state, ...action.payload }
      console.log(newState)
      return newState;
    },
    saveList(state, action) {
      let newState = { ...state, list: action.payload }
      console.log(newState)
      return newState;
    },
    savePiecount(state, action) {
      let newState = { ...state, piecount: action.payload }
      console.log(newState)
      return newState;
    },
  },

};
