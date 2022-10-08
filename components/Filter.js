import Chip from "@mui/material/Chip";

import { Scrollbar, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Filter = ({ activeFilters, filters, onClick }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      freeMode={true}
      navigation={true}
      modules={[FreeMode, Navigation]}
    >
      {filters.map((filter) => (
        <SwiperSlide key={filter}>
          <Chip
            sx={{ width: "100%" }}
            label={filter}
            variant={activeFilters.includes(filter) ? "" : "outlined"}
            onClick={() => onClick(filter)}
            style={{ textTransform: "capitalize" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Filter;
