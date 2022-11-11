const initialState = {
  bannerList:[
    {
        "maBanner": 1,
        "maPhim": 1282,
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
    }
  ]
}

export const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {

        // case "":
        //     return { ...state }

        default:
            return state
    }
}
