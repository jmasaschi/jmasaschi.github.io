const styles = ["bluechange", "redchange", "greenchange", "default"];


document.getElementById("changeButton").addEventListener("click", function() {
    let selectedStyle = styles[Math.floor(Math.random() * styles.length)];
    document.getElementById("changeable").className = selectedStyle;
});