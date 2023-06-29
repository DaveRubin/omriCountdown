const KEY = "donesArray"

export const getDonesStorage = () => {
    const existingDones = localStorage.getItem(KEY)
    if (!existingDones) {
        return []
    }
    return JSON.parse(existingDones)
}

export const setDonesStorage = (dones) => {
    const jsonArr = JSON.stringify(dones);
    localStorage.setItem(KEY, jsonArr);

}