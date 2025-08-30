function debounce(func, delay){
    let debounced;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounced);
        debounced =setTimeout(() => func.apply(context, args), delay);
    }
}

const apiCall = (value) => {
    console.log("API called for " + value);
}

const debounceApi = debounce(apiCall, 500)

document.getElementById("search").addEventListener("input", function(e){
    debounceApi(e.target.value);
});