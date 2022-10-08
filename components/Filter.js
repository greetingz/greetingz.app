import Chip from "@mui/material/Chip";

import { Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

const Filter = ({ activeFilters, filters, onClick }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      freeMode={true}
      scrollbar={{
        hide: true,
      }}
      modules={[FreeMode, Scrollbar]}
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
