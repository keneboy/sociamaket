import React, { createContext, useReducer } from "react";

const initialState = {
  business: {
    natureOfBusiness: [],
    otherNatureOfBusiness: "",
    operation: "",
    under_cac: "",
    sizeOfFarm: "",
    farmPremises: "",
    size_of_team: "",
    is_government_funded: "",
    program_initiative: "",
    storeImageOne: [],
  },
  first_step: {
    youtube_video: "",
    photos: [],
    category: {
      name: "",
      avatar: "",
      subCategory: [],
    },
    subCategory: "",
    state: {
      code: "",
      name: "",
      subCategory: [],
    },
    city: "",
  },
};
export const ProductContext = createContext<{
  state: initialStateProps;
  dispatch: React.Dispatch<MicroAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

interface ValidationSchema {
  youtube_video: string;
  photos: Array<any>;
  category: {
    name: string;
    avatar: string;
    subCategory?: Array<any>;
  };
  subCategory: string;
  state: {
    code?: string;
    name: string;
    subCategory?: Array<any>;
  };
  city: string;
}

interface BusinessProps {
  natureOfBusiness: string[];
  otherNatureOfBusiness?: string;
  operation: string;
  under_cac: string;
  sizeOfFarm: string;
  farmPremises: string;
  size_of_team: string;
  is_government_funded: string;
  program_initiative?: string;
  storeImageOne?: File[];
}

type initialStateProps = {
  first_step: ValidationSchema;
  business: BusinessProps;
};
type MicroAction =
  | {
      type: "FIRST_STEP";
      payload: ValidationSchema;
    }
  | {
      type: "ADD_BUSINESS";
      payload: BusinessProps;
    };

const reducer = (
  state: initialStateProps,
  action: MicroAction
): initialStateProps => {
  switch (action.type) {
    case "FIRST_STEP":
      return {
        ...state,
        first_step: { ...action.payload },
      };
    case "ADD_BUSINESS":
      return {
        ...state,
        business: { ...action.payload },
      };
    default:
      return state;
  }
};

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
