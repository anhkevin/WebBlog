export const state = () => ({
    search: '',
    menu: false
})

export const mutations = {
    setSearch(state, text) {
        state.search = text
    },
    setMenu(state, text) {
        state.menu = text
    }
}