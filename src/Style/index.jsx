import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
    color: {
        color_primary1:"#E064CC",
        color_primary2:"#E34981",
        color_secondary:"#03B898",
        grey_1:"#F8F9FA",
        grey_2:"#E9ECEF",
        grey_3:"#868E96",
        grey_2:"#212529",
    },
    components: {
        Heading: {
            variants: {
                landingPageTitle1:{ color: "#fff",fontFamily: "nunito, sans-serif",fontStyle: "normal",fontWeight: "700",fontSize: "38px",lineHeight: "48px"},               
                title1:{ color: "#212529",fontFamily: "nunito, sans-serif",fontStyle: "bold",fontWeight: "800",fontSize: "28px",lineHeight: "48px"},
                title2:{ color: "#212529",fontFamily: "nunito, sans-serif",fontStyle: "bold",fontWeight: "700",fontSize: "24px",lineHeight: "34px"},
                title3:{ color: "#212529",fontFamily: "nunito, sans-serif",fontStyle: "bold",fontWeight: "600",fontSize: "16px",lineHeight: "30px"},
                title4:{ color: "#212529",fontFamily: "nunito, sans-serif",fontStyle: "bold",fontWeight: "600",fontSize: "12px",lineHeight: "26px"},
            }
        },
        Text: {
            variants: {
                landingPageHeadLine:{ color: "#fff",fontFamily: "nunito, sans-serif",fontStyle: "normal",fontWeight: "700",fontSize: "16px",lineHeight: "26px"},
                headline:{ color: "#868e96",fontFamily: "nunito, sans-serif",fontStyle: "normal",fontWeight: "400",fontSize: "16px",lineHeight: "26px"},
                body:{ color: "#868e96",fontFamily: "nunito, sans-serif",fontStyle: "normal",fontWeight: "600",fontSize: "12px",lineHeight: "22px"},
            }
        },
        Button: {
            variants: {
                default: {
                    d:"flex",
                    flexDir:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    h:"48px",
                    p:"13px 20px",
                    bg:"#FD377E",
                    border:"2px solid #FD377E",
                    borderRadius:"8px",
                    boxSizing:"border-box",
                    color:"#fff",
                    fontFamily:"inter,sans-serif",
                    fontStyle:"normal",
                    fontWeight:"500",
                    fontSize:"16px",
                    lineHeight:"19px",
                    cursor:"pointer",
                    _hover: {
                        bg:"#E34981",
                        color:"#F8F9FA",
                    },
                    _focus: {
                        border:"0px"
                    }
                },
                filterBtn: {
                    d:"flex",
                    flexDir:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    h:"48px",
                    p:"15px",
                    bg:"#E9ECEF",
                    border:"1.4px solid #E9ECEF",
                    borderRadius:"8px",
                    boxSizing:"border-box",
                    color:"#868E96",
                    fontFamily:"inter,sans-serif",
                    fontStyle:"normal",
                    fontWeight:"600",
                    fontSize:"14px",
                    lineHeight:"19px",
                    cursor:"pointer",
                    _hover: {
                        bg:"#868E96",
                        color:"#F8F9FA",
                        border:"1.4px solid #868E96",
                    },
                    _focus:{
                        bg:"#FD377E",
                        color:"#ffffff",
                        border:"1.4px solid #FD377E",
                    }
                },
                deleteBtn:{
                    h:"22px",
                    bg:"#E9ECEF",
                    color:"#212529",
                    pb:"5px",
                    _hover:{
                        bg:"#868E96",
                        color:"#E9ECEF",
                        border:"1.4px solid #868E96"
                    }
                }
            }
        }
    }
})

export default CustomTheme;