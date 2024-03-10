$('.toform').click(function () {
    $("html, body").animate({scrollTop: $("#order_form").offset().top - 100}, 1000);
    return false;
});

$('.sec1').click(function () {
    $("html, body").animate({scrollTop: $("#sec1").offset().top}, 1000);
    return false;
});

$('.sec4').click(function () {
    $("html, body").animate({scrollTop: $("#sec4").offset().top}, 1000);
    return false;
});

$('.sec5').click(function () {
    $("html, body").animate({scrollTop: $("#sec5").offset().top}, 1000);
    return false;
});

$('.sec6').click(function () {
    $("html, body").animate({scrollTop: $("#sec6").offset().top}, 1000);
    return false;
});
$('.sec7').click(function () {
    $("html, body").animate({scrollTop: $("#sec7").offset().top}, 1000);
    return false;
});
$('.sec10').click(function () {
    $("html, body").animate({scrollTop: $("#sec10").offset().top}, 1000);
    return false;
});
$('.sec11').click(function () {
    $("html, body").animate({scrollTop: $("#sec11").offset().top}, 1000);
    return false;
});

function validateform(form) {
    if (form.elements["name"].value == "") {
        alert("Please, enter your full name");
        return false;
    }
    if (form.elements["name"].value.length < 2) {
        alert("Please, enter your full name");
        return false;
    }
    var phone_reg = new RegExp('[A-z А-я]', 'g');
    var literInPhone = phone_reg.test(form.elements["phone"].value);
    if (form.elements["phone"].value == "") {
        alert("Please, enter your phone number");
        return false;
    }
    if (literInPhone) {
        alert("Please, enter your phone number");
        return false;
    }

    if (form.elements["phone"].value.length < 9) {
        alert("Please, enter your phone number");
        return false;
    }
    form.submit();
};


var nav = $("#fxd");
var h = nav.offset().top;
var obj = $("#ftr");
$(window).scroll(function() {
    if ($(window).scrollTop() > h) {
        //obj.fadeIn()
        $(obj).css({'top' : '0',});
    } else {
        //obj.fadeOut()
        $(obj).css({'top' : '-110px',});
    }
});

let compositionData = [
{title: '1. Antioksidan bisa menghilangkan radikal bebas, melindungi struktur mata, mencegah segala penyakit mata', content: 'Antioksidan dan ampuh melawan stres oksidatif,  antosianosid dan polifenol sebagai senyawa antioksidan yang bagus untuk melindungi mata dan menjaga penglihatan. Senyawa ini dapat meningkatkan mikrosirkulasi dan menjaga fungsi retinal, serta efektif dalam meningkatkan aliran darah ke retina mata, dan juga diindikasikan pada penderita degenerasi makula, katarak, retinopati diabetik dan meningkatkan penglihatannya pada malam hari. '},
{title: '2. Vitamin A  yang terkandung di dalam Ekstrak Blueberry juga banyak fungsinya untuk kesehatan mata.', content: 'Vitamin A akan membantu penglihatan lebih optimal ketika cahaya sedang redup dan sedikit.  Membantu upaya mengurangi risiko rabun senja dan kematian pada wanita hamil dengan gizi buruk. '},
{title: '3. Bebas iritasi dengan kandungan Polifenol di dalam salah satu bahan herbal berkualitas.', content: 'Polifenol dalam kandungan Ekstrak Blueberry Eropa, ikut membantu mendukung kesehatan mata dengan kandungan antioksidan, anti inflamasi (iritasi), penstabil kolagen, dan pelindung pembuluh darah. Mata akan tetap segar dan bebas dari kemerahan karena gatal dan bakteri jahat.Selain itu, membantu meningkatkan penglihatan dan memperkuat pembuluh darah di belakang mata.'},
{title: '4. Turnkan glukosa untuk mencegah terjadinya retinopati diabetik.', content: 'Senyawa aktif yang berkhasiat tersebut yaitu deoksiandrografolida, neoandrografolida, 14-deoksi-11-12-didehidroandrografolida dan homo-andrografolida.Senyawa andrografolid ini dapat menurunkan aktivitas pembentukan glukosa dari senyawa-senyawa nonkarbohidrat seperti piruvat dan laktat.'},
];
let s5data = [
{title:'Kesalahan 1: Percayalah bahwa suplemen mata ini mengandung konsentrasi zat tunggal yang lebih tinggi, jika suplemen mata mengandung nutrisi tunggal dalam konsentrasi tinggi itu tidak akan bekerja sesuai harapan karena', content: '- Menjaga kesehatan penglihatan tidak hanya membutuhkan satu nutrisi, karena mata membutuhkan banyak kandungan secara bersamaan. Oleh karena itu, obat itu tidak akan mungkin memberikan kebutuhan mata secara komprehensif. - Kandungan dengan konsentrasi tinggi bila digunakan secara berlebihan akan dengan mudah mengalami overdosis dan menyebabkan banyak efek kesehatan yang negatif.'},
{title:'Kesalahan 2: Berpikir bahwa suplemen mata dari luar lebih bagus daripada lokal!', content: 'Salah besar jika suplemen mata buatan Amerika, Australia, Jepang ... lebih baik daripada produk Indonesia. Berikut alasannya: - Formula dan komposisi hanya cocok digunakan oleh mereka karena mengikuti keadaan biologis mereka. Sehingga efeknya sulit terasa.'},
{title:'Kesalahan 3: Memilih suplemen mata yang tidak terdaftar di BPOM', content: 'Suplemen mata yang baik dan sehat itu harus diproduksi sesuai dengan teknologi canggih, sesuai dan melalui uji coba ISO. Selain itu harus berada di bawah pengawasan Departemen Keamanan Pangan di bawah Kementerian Kesehatan terlebih BPOM dan Badan Halal. Namun banyak di luar sana, suplemen mata palsu dan tidak terdaftar BPOM, sehingga menimbulkan efek samping yang membahayakan kesehatan.'},
{title:'Kesalahan 4: Memilih suplemen mata yang belum pernah digunakan sama belum ada testimoni soal produk!', content: 'Saat ingin memilih suplemen mata, tidak ada yang lebih relevan dan objektif selain mendengar pendapat dari orang yang pernah menggunakannya secara langsung. Namun, banyak orang tidak melihat ini, malah hanya melihat iklan, dan berakhir menyedihkan karena salah memilih produk.'},
{title:'Kesalahan 5: Pilih suplemen mata yang murah', content: 'Banyak orang tergiur harga murah untuk membeli suplemen mata. Namun nyatanya itu sama sekali tidak berhasil. Karena yang terpenting itu formulanya bukan harganya. Jangan membeli barang yang tidak ada efek untuk tubuh, karena akan berakhir sia-sia.'},
{title:'Kesalahan 6: Menggunakan suplemen mata, bisa langsung efektif dalam beberapa saat', content: 'Biasanya, suplemen mata adalah makanan pelindung kesehatan, yang dikenal sebagai makanan fungsional. Banyak orang salah kaprah kalau menggunakan obat ini bisa cepat sembuh dari masalah penglihatan. Tapi bukan itu masalahnya, pil tonik mata terdaftar sebagai makanan fungsional karena bahan utamanya dari herbal yang dikombinasikan dengan bahan aktif biologis alami, membantu mendukung pengobatan dan pencegahan. Diperlukan kesabaran untuk membantu menstabilkan gangguan di dalam tubuh, dari situ kondisi akan berangsur-angsur membaik sesuai dengan penggunaan.'},
];

let combositionButtons = document.querySelectorAll('.s6-list2-items');

document.querySelector('.composition-wrapper').addEventListener('click' , (e) => {
e.target.classList.contains('composition-wrapper') ?
document.querySelector('.composition-wrapper').style.display = 'none' :
document.querySelector('.composition-wrapper').style.display = 'flex';
});

combositionButtons.forEach((btn, index) => {
btn.addEventListener('click', () => {
    document.querySelector('.composition-wrapper').style.display = 'flex';
    document.querySelector('.composition-title').innerHTML = compositionData[index].title;
    document.querySelector('.composition-content').innerHTML = compositionData[index].content;
})
});

let s5buttons = document.querySelectorAll('.s5btn');

s5buttons.forEach((btn, index) => {
btn.addEventListener('click', () => {
    document.querySelector('#s5title').innerHTML = s5data[index].title;
    document.querySelector('#s5content').innerHTML = s5data[index].content;
})
});

$('.reviews_wrapper').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
dots: false,
autoplay: true,
autoplaySpeed: 5000,
prevArrow: false,
nextArrow: false,
responsive: [{
    breakpoint: 1200,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    }
},
{
    breakpoint: 760,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    }
}]
});