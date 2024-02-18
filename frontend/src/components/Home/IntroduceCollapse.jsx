import { useState } from "react";

const IntroduceCollapse = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white p-3">
        <h2 className="text-lg font-semibold mb-3">
          Chợ Tốt - Chợ Mua Bán, Rao Vặt Trực Tuyến Hàng Đầu Của Người Việt
        </h2>
        <div
          className={`${
            isOpen
              ? "overflow-hidden text-sm leading-6"
              : "overflow-hidden h-28 text-sm shadow-inner leading-6"
          }`}
        >
          Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012, với
          mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối người mua
          với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện
          lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ. Đến nay, Chợ Tốt
          tự hào là Website rao vặt được ưa chuộng hàng đầu Việt Nam. Hàng ngàn
          món hời từ Bất động sản, Nhà cửa, Xe cộ, Đồ điện tử, Thú cưng, Vật
          dụng cá nhân... đến tìm việc làm, thông tin tuyển dụng, các dịch vụ -
          du lịch được đăng tin, rao bán trên Chợ Tốt. Với Chợ Tốt, bạn có thể
          dễ dàng mua bán, trao đổi bất cứ một loại mặt hàng nào, dù đó là đồ cũ
          hay đồ mới với nhiều lĩnh vực: Bất động sản: Cho thuê, Mua bán nhà
          đất, căn hộ chung cư, văn phòng mặt bằng kinh doanh, phòng trọ đa dạng
          về diện tích, vị trí Phương tiện đi lại: xe ô tô, xe máy có độ bền
          cao, giá cả hợp lý, giấy tờ đầy đủ. Đồ dùng cá nhân: quần áo, giày
          dép, túi xách, đồng hồ... đa phong cách, hợp thời trang. Đồ điện tử:
          điện thoại di động, máy tính bảng, laptop, tivi, loa, amply...; đồ
          điện gia dụng: máy giặt, tủ lạnh, máy lạnh điều hòa... với rất nhiều
          nhãn hiệu, kích thước khác nhau. ﻿Vật nuôi, thú cưng đa chủng loại:
          gà, chó (chó phốc sóc, chó pug, chó poodle...), chim, mèo (mèo anh
          lông ngắn, mèo munchkin...), cá, hamster giá cực tốt. Tuyển dụng, việc
          làm với hàng triệu công việc hấp dẫn, phù hợp tại Việc Làm Tốt - Kênh
          tuyển dụng hiệu quả, uy tín được phát triển bởi Chợ Tốt. ﻿Dịch vụ, du
          lịch: khách sạn, vé máy bay, vé tàu, vé xe, tour du lịch và các
          voucher du lịch... uy tín, chất lượng. ﻿Đồ ăn, thực phẩm: các món ăn
          được chế biến thơm ngon, hấp dẫn, thực phẩm tươi sống, an toàn & giá
          cả hợp lý. Và còn rất nhiều mặt hàng khác nữa đã và đang được rao bán
          tại Chợ Tốt. Mỗi người trong chúng ta đều có những sản phẩm đã qua sử
          dụng và không cần dùng tới nữa. Vậy còn chần chừ gì nữa mà không để nó
          trở nên giá trị hơn với người khác. Rất đơn giản, bạn chỉ cần chụp
          hình lại, mô tả cụ thể về sản phẩm và sử dụng ứng dụng Đăng tin miễn
          phí của Chợ Tốt là đã có thể đến gần hơn với người cần nó. Không những
          thế, website chotot.com còn cung cấp cho bạn thông tin về giá cả các
          mặt hàng để bạn có thể tham khảo. Đồng thời, thông qua Blog kinh
          nghiệm, Chợ Tốt sẽ tư vấn, chia sẻ cho bạn những thông tin bổ ích, bí
          quyết, mẹo vặt giúp bạn có những giao dịch mua bán an toàn, đảm bảo.
          Chợ Tốt cũng sẵn sàng hỗ trợ bạn trong mọi trường hợp cần thiết. Chúc
          các bạn có những trải nghiệm mua bán tuyệt vời trên Chợ Tốt.
        </div>
        <button
          className="text-blue-300 block mx-auto"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "Thu gọn" : "Mở rộng"}
        </button>
      </div>
    </>
  );
};

export default IntroduceCollapse;
