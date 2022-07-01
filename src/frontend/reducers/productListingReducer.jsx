import { actionTypes } from "./actionTypes";

const productListingReducer = (state, action) => {
    const {
        LOAD_DATA,
        CLEAR,
        LOW_TO_HIGH,
        HIGH_TO_LOW,
        RATING,
        MOBILE,
        LAPTOP,
        DESKTOP,
        WATCH,
        TABLET,
        PRICE
    } = actionTypes;

    switch(action.type) {
        case LOAD_DATA: 
            return {
                ...state,
                data: [...action.payload]
            };
        case LOW_TO_HIGH:
            return {
                ...state,
                sortBy: action.type
            }
        case HIGH_TO_LOW:
            return {
                ...state,
                sortBy: action.type
            }
        case RATING: 
            return {
                ...state,
                rating: parseInt(action.value, 10)
            }
        case MOBILE:
            return {
                ...state,
                categories: {
                    ...state['categories'],
                    mobiles: !state.categories.mobiles
                }
            }
        case LAPTOP:
            return {
                ...state,
                categories: {
                    ...state['categories'],
                    laptops: !state.categories.laptops
                }
            }
        case TABLET:
            return {
                ...state,
                categories: {
                    ...state['categories'],
                    tablets: !state.categories.tablets
                }
            }
        case WATCH:
            return {
                ...state,
                categories: {
                    ...state['categories'],
                    watches: !state.categories.watches
                }
            }
        case DESKTOP:
            return {
                ...state,
                categories: {
                    ...state['categories'],
                    desktops: !state.categories.desktops
                }
            }
        case CLEAR:
            return {
                ...state,
                sortBy: "",
                categories: {
                    mobiles: false,
                    laptops: false,
                    tablets: false,
                    watches: false,
                    desktops: false
                },
                price: 5000,
                rating: 1
            }
        case PRICE:
            return {
                ...state,
                price: action.value
            }
        default:
            return state;
    }
}

export {productListingReducer};