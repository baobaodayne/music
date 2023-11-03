// Để thêm bài nhạc mình sẽ them vào list sau

//   {
//     name: "Tên bài nhạc",
//     artist: "Nghệ sĩ",
//     img: "Tên ảnh định dạng .jpg trong project",
//     src: "Link đường dẫn file nhạc đinh dạng .mp3"
//   }

let allMusic = [
  {
    name: "Em Ơi Anh Phải Làm Sao Remix 8D",
    artist: "Dương Minh Tuấn,Eren Mix 8D",
    img: "Em Ơi Anh Phải Làm Sao Remix 8D",
    src: "Em Ơi Anh Phải Làm Sao Remix 8D"
  },
  {
    name: "Quá Khứ Anh Không Thể Quên 8D",
    artist: "Dương Minh Tuấn,Eren Mix 8D",
    img: "Quá Khứ Anh Không Thể Quên 8D",
    src: "Quá Khứ Anh Không Thể Quên 8D"
  },
  {
    name: "Hoa Cỏ Lau Mix 8D",
    artist: "Phong Max,Eren Mix 8D",
    img: "Hoa Cỏ Lau Mix 8D",
    src: "Hoa Cỏ Lau Mix 8D"
  },
  {
    name: "Cứ Thế Mong Chờ Mix 8D",
    artist: "Nguyễn Đình Vũ,Eren Mix 8D",
    img: "Cứ Thế Mong Chờ Mix 8D",
    src: "Cứ Thế Mong Chờ Mix 8D"
  },
  {
    name: "Hồi Ức Ta Đã Yêu Mix 8D",
    artist: "Linh Hương Luz,Eren Mix 8D",
    img: "Hồi Ức Ta Đã Yêu Mix 8D",
    src: "Hồi Ức Ta Đã Yêu Mix 8D"
  },
  {
    name: "Hạnh Phúc Đó Em Không Có Mix 8D",
    artist: "Hoàng Ly,Eren Mix 8D",
    img: "Hạnh Phúc Đó Em Không Có Mix 8D",
    src: "Hạnh Phúc Đó Em Không Có Mix 8D"
  },
  {
    name: "Thế Thái Mix 8D",
    artist: "Hương Ly,Eren Mix 8D",
    img: "Thế Thái Mix 8D",
    src: "Thế Thái Mix 8D"
  },
  {
    name: "Tướng Quân Mix 8D",
    artist: "Nhật Phong,Eren Mix 8D",
    img: "Tướng Quân Mix 8D",
    src: "Tướng Quân Mix 8D"
  },
   {
    name: "Pháo Hồng Mix 8D",
    artist: "Đạt Long Vinh,Eren Mix 8D",
    img: "Pháo Hồng Mix 8D",
    src: "Pháo Hồng Mix 8D"
  },
  {
    name: "Hoa Cưới Mix 8D",
    artist: "Đạt Long Vinh,Eren Mix 8D",
    img: "Hoa Cưới Mix 8D",
    src: "Hoa Cưới Mix 8D"
  },
  {
    name: "Bên Trên Tầng Lầu Mix 8D",
    artist: "Tăng Duy Tân,Eren Mix 8D",
    img: "Bên Trên Tầng Lầu Mix 8D",
    src: "Bên Trên Tầng Lầu Mix 8D"
  },
  {
    name: "Cứu Vãn Kịp Không Mix 8D",
    artist: "Vương Anh Tú x AnhVu,Eren Mix 8D",
    img: "Cứu Vãn Kịp Không Mix 8D",
    src: "Cứu Vãn Kịp Không Mix 8D"
  },
  {
    name: "Hôm Nay Em Cưới Rồi Mix 8D",
    artist: "Khải Đăng,Eren Mix 8D",
    img: "Hôm Nay Em Cưới Rồi Mix 8D",
    src: "Hôm Nay Em Cưới Rồi Mix 8D"
  },
  {
    name: "Đoạn Tuyệt Nàng Đi Mix 8D",
    artist: "Phát Huy T4,Eren Mix 8D",
    img: "Đoạn Tuyệt Nàng Đi Mix 8D",
    src: "Đoạn Tuyệt Nàng Đi Mix 8D"
  },
  {
    name: "Lỡ Yêu Người Đậm Sâu Mix 8D",
    artist: "Linh Hương LUZ,Eren Mix 8D",
    img: "Lỡ Yêu Người Đậm Sâu Mix 8D",
    src: "Lỡ Yêu Người Đậm Sâu Mix 8D"
  },
  {
    name: "Anh Chỉ Là Người Thay Thế Mix 8D",
    artist: "MR Siro,Eren Mix 8D",
    img: "Anh Chỉ Là Người Thay Thế Mix 8D",
    src: "Anh Chỉ Là Người Thay Thế Mix 8D"
  },
  {
    name: "Hạt Mứa Vương Vấn Mix 8D",
    artist: "Phan Duy Anh,Eren Mix 8D",
    img: "Hạt Mứa Vương Vấn Mix 8D",
    src: "Hạt Mứa Vương Vấn Mix 8D"
  },
  {
    name: "Không Đợi Được Hoa Nở Mix 8D",
    artist: "Phó Mộng Đồng,Eren Mix 8D",
    img: "Không Đợi Được Hoa Nở Mix 8D",
    src: "Không Đợi Được Hoa Nở Mix 8D"
  },
  {
    name: "Hoa Tàn Tình Tan Mix 8D",
    artist: "Giang Jolle,Eren Mix 8D",
    img: "Hoa Tàn Tình Tan Mix 8D",
    src: "Hoa Tàn Tình Tan Mix 8D"
  },
  {
    name: "Bật Tình Yêu Lên Mix 8D",
    artist: "Tăng Duy Tân x Hòa Minzy,Eren Mix 8D",
    img: "Bật Tình Yêu Lên Mix 8D",
    src: "Bật Tình Yêu Lên Mix 8D"
  },
  {
    name: "Biết Tìm Đâu Mix 8D",
    artist: "Tiến Tới,Eren Mix 8D",
    img: "Biết Tìm Đâu Mix 8D",
    src: "Biết Tìm Đâu Mix 8D"
  },
  {
    name: "Buồn Của Anh Lofi Mix 8D",
    artist: "Đạt G,Eren Mix 8D",
    img: "Buồn Của Anh Lofi Mix 8D",
    src: "Buồn Của Anh Lofi Mix 8D"
  },
  {
    name: "Yêu Thật Khó Xóa Thật Đau Lofi Mix 8D",
    artist: "Trương Khải Minh,Eren Mix 8D",
    img: "Yêu Thật Khó Xóa Thật Đau Lofi Mix 8D",
    src: "Yêu Thật Khó Xóa Thật Đau Lofi Mix 8D"
  },
  {
    name: "Quá Khứ Anh Không Thể Nào Quên Lofi Mix 8D",
    artist: "Dương Minh Tuấn,Eren Mix 8D",
    img: "Quá Khứ Anh Không Thể Nào Quên Lofi Mix 8D",
    src: "Quá Khứ Anh Không Thể Nào Quên Lofi Mix 8D"
  },
  {
    name: "Sự Thật Đã Bỏ Quên Mix 8D",
    artist: "Hà Duy Thái,Eren Mix 8D",
    img: "Sự Thật Đã Bỏ Quên Mix 8D",
    src: "Sự Thật Đã Bỏ Quên Mix 8D"
  },
  {
    name: "Yêu 5 Mix 8D",
    artist: "Rhymastic,Eren Mix 8D",
    img: "Yêu 5 Mix 8D",
    src: "Yêu 5 Mix 8D"
  },
  {
    name: "Em Là Ai Mix 8D",
    artist: "Keyo,Eren Mix 8D",
    img: "Em Là Ai Mix 8D",
    src: "Em Là Ai Mix 8D"
  },
  {
    name: "Ép Duyên Mix 8D",
    artist: "Long Nón Lá,Eren Mix 8D",
    img: "Ép Duyên Mix 8D",
    src: "Ép Duyên Mix 8D"
  },
  {
    name: "Em Biết Anh Không Yêu Em Mix 8D",
    artist: "Eren Mix 8D",
    img: "Em Biết Anh Không Yêu Em Mix 8D",
    src: "Em Biết Anh Không Yêu Em Mix 8D"
  },
  {
    name: "Quẻ Bói Mix 8D",
    artist: "Eren Mix 8D",
    img: "Quẻ Bói Mix 8D",
    src: "Quẻ Bói Mix 8D"
  },
  {
    name: "Tinh Vệ Mix 8D",
    artist: "Eren Mix 8D",
    img: "Tinh Vệ Mix 8D",
    src: "Tinh Vệ Mix 8D"
  },
  {
    name: "Light It Up x Rise Mix 8D",
    artist: "Eren Mix 8D",
    img: "TLight It Up x Rise Mix 8D",
    src: "Light It Up x Rise Mix 8D"
  },
  {
    name: "Bảo Bối Đang Làm Gì Đó Mix 8D",
    artist: "Eren Mix 8D",
    img: "Bảo Bối Đang Làm Gì Đó Mix 8D",
    src: "Bảo Bối Đang Làm Gì Đó Mix 8D"
  },
  {
    name: "The Hills Mix 8D",
    artist: "Eren Mix 8D",
    img: "The Hills Mix 8D",
    src: "The Hills Mix 8D"
  },
  {
    name: "Hồi Tâm Chuyển Ý Mix 8D",
    artist: "Eren Mix 8D",
    img: "Hồi Tâm Chuyển Ý Mix 8D",
    src: "Hồi Tâm Chuyển Ý Mix 8D"
  },
  {
    name: "Từ Cửu Môn Hồi Ức Mix 8D",
    artist: "Eren Mix 8D",
    img: "Từ Cửu Môn Hồi Ức Mix 8D",
    src: "Từ Cửu Môn Hồi Ức Mix 8D"
  },
  {
    name: "Đáy Biển Mix 8D",
    artist: "Eren Mix 8D",
    img: "Đáy Biển Mix 8D",
    src: "Đáy Biển Mix 8D"
  },
  {
    name: "Vây Giữ Mix 8D",
    artist: "Eren Mix 8D",
    img: "Vây Giữ Mix 8D",
    src: "Vây Giữ Mix 8D"
  },
   {
    name: "Hôm Nay Em Cưới Rồi LOFI Mix 8D",
    artist: "Khải Đăng,Eren Mix 8D",
    img: "Hôm Nay Em Cưới Rồi LOFI Mix 8D",
    src: "Hôm Nay Em Cưới Rồi LOFI Mix 8D"
  },
  {
    name: "Em Nguyện Làm Người Bình Thường Bên Anh Mix 8D",
    artist: "Eren Mix 8D",
    img: "Em Nguyện Làm Người Bình Thường Bên Anh Mix 8D",
    src: "Em Nguyện Làm Người Bình Thường Bên Anh Mix 8D"
  },
  {
    name: "Mong Một Ngày Nhớ Đến Em Mix 8D",
    artist: "Eren Mix 8D",
    img: "Mong Một Ngày Nhớ Đến Em Mix 8D",
    src: "Mong Một Ngày Nhớ Đến Em Mix 8D"
  },
  {
    name: "Du Sơn Luyến Mix 8D",
    artist: "Eren Mix 8D",
    img: "Du Sơn Luyến Mix 8D",
    src: "Du Sơn Luyến Mix 8D"
  },
  {
    name: "Một Đường Hoa Nở Mix 8D",
    artist: "Eren Mix 8D",
    img: "Một Đường Hoa Nở Mix 8D",
    src: "Một Đường Hoa Nở Mix 8D"
  },
  {
    name: "Beat Tổng Hợp Mix 8D",
    artist: "Eren Mix 8D",
    img: "Beat Tổng Hợp Mix 8D",
    src: "Beat Tổng Hợp Mix 8D"
  },
];