export default function(...args) {
    return fetch(...args).then(res => res.json())
}
