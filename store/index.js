export const state = () => ({
    search: ''
})

export const mutations = {
    setSearch(state, text) {
        state.search = text
    }
}