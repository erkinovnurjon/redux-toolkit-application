import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	articles: [],
	error: null,
	articleDetail: null ,
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getArticlesStart: state => {
			state.isLoading = true
		},
		getArticleSuccess: (state, action) => {
			state.isLoading = false
			state.articles = action.payload
		},
		getArticleFailure: (state, action) => {
			state.error = action.payload
		},
		getDetailStart:state => {
			state.isLoading = true
		},
		getDetailSuccess : (state, action) => {
			state.isLoading= false
			state.articleDetail = action.payload
		},
		getDetailFailure: state => {
			state.isLoading = false
		},
		postArticleStart: state => {
			 state.isLoading = true
		},
		postArticleSuccess : state => {
			state.isLoading = false
		},
		postArticleFailure : state => {
			state.isLoading = false
			state.error = "Error"
		}
	},
})

export const {getArticlesStart, postArticleStart , postArticleFailure , postArticleSuccess , getArticleSuccess, getArticleFailure, getDetailFailure , getDetailStart , getDetailSuccess} = articleSlice.actions
export default articleSlice.reducer