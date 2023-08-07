// Fungsi untuk mengonversi teks menjadi audio
function convertTextToSpeech() {
    const textToConvert = document.getElementById('text-to-convert').value;
    if (textToConvert.trim() === '') {
        alert('Masukkan teks sebelum mengonversi ke audio.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(textToConvert);
    utterance.lang = 'id-ID'; // Menetapkan bahasa ke bahasa Indonesia (kode bahasa id-ID)
    speechSynthesis.speak(utterance);
}

// Event listener untuk tombol konversi
document.getElementById('convert-button').addEventListener('click', convertTextToSpeech);
