export const signUp = async (e, input, set) => {};
export const login = async (e, input, set) => {};
export const upload = async (e, input, set) => {};
export const searchNgo = async (e, input, set) => {};
export const getStates = async (set) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/states`);
        const response = await res.json();
        set(response);
    } catch (err) {
        console.log(err);
    }
};
