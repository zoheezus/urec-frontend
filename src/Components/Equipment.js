/* eslint-disable eqeqeq */
import React, { Component } from "react";
import axios from "axios";

class Equipment extends Component {
  state = {
    equipment: [],
    status: "unoccupied"
  };

  async componentDidMount() {
    axios.get("http://18.220.209.203/view.php/").then(res => {
      let i = 1;
      this.interval = setInterval(() => {
        this.setState({ equipment: res.data["data"], loading: false });
        console.log("interval " + i++);
      }, 3000);
    });
  }

  async componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    function Equipment(name, status) {
      let convertedName = name.replace(/-/g, "_");
      // console.log("Name: ", name, "CName: ", convertedName);
      // console.log(status);
      // const pathData = [
      //   'M268.24,167.38l4.07-1.73a.51.51,0,0,1,.66.26l3.47,8.19a.34.34,0,0,1-.18.44L272,176.33a.49.49,0,0,1-.65-.26L268,168A.5.5,0,0,1,268.24,167.38Zm2.69,9.69.09.22a.26.26,0,0,0,.33.13l6.1-2.59a.18.18,0,0,0,.09-.22l-.13-.29a.25.25,0,0,0-.32-.13l-6,2.56A.25.25,0,0,0,270.93,177.07Zm1.06-1.88.23.53a.49.49,0,0,0,.65.26l2.17-.92a.5.5,0,0,0,.26-.65l-.22-.53a.51.51,0,0,0-.66-.27l-2.16.92A.5.5,0,0,0,272,175.19Zm4.58-.77.75-.32-3.61-8.5a.5.5,0,0,0-.65-.27l-.29.12Zm-5.74,2.43.75-.32-3.8-9-.29.12a.51.51,0,0,0-.26.66Z'
      // ];

      const paths = {
        treadmill_1:
          "M268.24,167.38l4.07-1.73a.51.51,0,0,1,.66.26l3.47,8.19a.34.34,0,0,1-.18.44L272,176.33a.49.49,0,0,1-.65-.26L268,168A.5.5,0,0,1,268.24,167.38Zm2.69,9.69.09.22a.26.26,0,0,0,.33.13l6.1-2.59a.18.18,0,0,0,.09-.22l-.13-.29a.25.25,0,0,0-.32-.13l-6,2.56A.25.25,0,0,0,270.93,177.07Zm1.06-1.88.23.53a.49.49,0,0,0,.65.26l2.17-.92a.5.5,0,0,0,.26-.65l-.22-.53a.51.51,0,0,0-.66-.27l-2.16.92A.5.5,0,0,0,272,175.19Zm4.58-.77.75-.32-3.61-8.5a.5.5,0,0,0-.65-.27l-.29.12Zm-5.74,2.43.75-.32-3.8-9-.29.12a.51.51,0,0,0-.26.66Z",
        treadmill_2:
          "M259.68,171l4.07-1.73a.5.5,0,0,1,.66.27l3.47,8.18a.35.35,0,0,1-.18.45L263.48,180a.5.5,0,0,1-.65-.27l-3.41-8A.5.5,0,0,1,259.68,171Zm2.69,9.7.09.21a.25.25,0,0,0,.33.13l6.1-2.59a.17.17,0,0,0,.09-.22l-.12-.28a.26.26,0,0,0-.33-.14l-6,2.56A.25.25,0,0,0,262.37,180.71Zm1.07-1.89.22.53a.5.5,0,0,0,.66.26l2.16-.91a.51.51,0,0,0,.26-.66l-.22-.53a.5.5,0,0,0-.66-.26l-2.16.91A.51.51,0,0,0,263.44,178.82Zm4.58-.77.74-.32-3.61-8.5a.49.49,0,0,0-.65-.26l-.29.12Zm-5.74,2.43.74-.32-3.8-8.95-.28.12a.49.49,0,0,0-.27.65Z",
        treadmill_3:
          "M251.12,174.64l4.08-1.73a.51.51,0,0,1,.65.27l3.47,8.18a.33.33,0,0,1-.18.45l-4.21,1.79a.5.5,0,0,1-.66-.27l-3.41-8A.5.5,0,0,1,251.12,174.64Zm2.7,9.7.09.21a.23.23,0,0,0,.32.13l6.1-2.59a.16.16,0,0,0,.09-.22l-.12-.28a.24.24,0,0,0-.33-.13L254,184A.25.25,0,0,0,253.82,184.34Zm1.06-1.89.22.53a.51.51,0,0,0,.66.27l2.16-.92a.51.51,0,0,0,.27-.66l-.23-.53a.5.5,0,0,0-.65-.26l-2.17.92A.5.5,0,0,0,254.88,182.45Zm4.58-.77.74-.32-3.6-8.5a.5.5,0,0,0-.66-.26l-.28.12Zm-5.74,2.43.75-.32-3.81-8.95-.28.12a.51.51,0,0,0-.27.66Z",
        treadmill_4:
          "M242.57,178.28l4.07-1.73a.49.49,0,0,1,.65.26l3.48,8.18a.34.34,0,0,1-.19.45l-4.21,1.79a.5.5,0,0,1-.66-.26l-3.41-8A.49.49,0,0,1,242.57,178.28Zm2.69,9.69.09.21a.25.25,0,0,0,.32.14l6.1-2.59a.17.17,0,0,0,.09-.23l-.12-.28a.23.23,0,0,0-.32-.13l-6,2.56A.24.24,0,0,0,245.26,188Zm1.06-1.88.22.52a.5.5,0,0,0,.66.27l2.16-.92a.5.5,0,0,0,.27-.66l-.23-.52a.49.49,0,0,0-.65-.27l-2.16.92A.5.5,0,0,0,246.32,186.09Zm4.58-.78.75-.31L248,176.5a.5.5,0,0,0-.66-.27l-.28.12Zm-5.74,2.43.75-.31-3.8-9-.29.12a.5.5,0,0,0-.26.66Z",
        treadmill_5:
          "M234,181.91l4.07-1.73a.51.51,0,0,1,.66.26l3.47,8.19a.34.34,0,0,1-.18.44l-4.22,1.79a.49.49,0,0,1-.65-.26l-3.42-8A.5.5,0,0,1,234,181.91Zm2.69,9.69.09.22a.26.26,0,0,0,.33.13l6.1-2.59a.18.18,0,0,0,.09-.22l-.13-.29a.25.25,0,0,0-.32-.13l-6,2.56A.25.25,0,0,0,236.7,191.6Zm1.06-1.88.23.53a.49.49,0,0,0,.65.26l2.17-.92a.5.5,0,0,0,.26-.65l-.22-.53a.51.51,0,0,0-.66-.27l-2.16.92A.5.5,0,0,0,237.76,189.72Zm4.58-.77.75-.32-3.61-8.5a.5.5,0,0,0-.65-.27l-.29.12Zm-5.74,2.43.75-.32-3.8-9-.29.12a.51.51,0,0,0-.26.66Z",
        treadmill_6:
          "M225.45,185.54l4.07-1.73a.5.5,0,0,1,.66.27l3.47,8.18a.35.35,0,0,1-.18.45l-4.22,1.79a.5.5,0,0,1-.65-.27l-3.41-8A.5.5,0,0,1,225.45,185.54Zm2.69,9.7.09.21a.25.25,0,0,0,.33.13l6.1-2.59a.17.17,0,0,0,.09-.22l-.12-.28a.26.26,0,0,0-.33-.14l-6,2.56A.25.25,0,0,0,228.14,195.24Zm1.07-1.89.22.53a.5.5,0,0,0,.66.26l2.16-.92a.49.49,0,0,0,.26-.65l-.22-.53a.5.5,0,0,0-.66-.26l-2.16.91A.51.51,0,0,0,229.21,193.35Zm4.58-.77.74-.32-3.61-8.5a.49.49,0,0,0-.65-.26l-.29.12ZM228.05,195l.74-.32-3.8-8.95-.28.12a.49.49,0,0,0-.27.65Z",
        treadmill_7:
          "M211.06,192.27l4.07-1.73a.52.52,0,0,1,.66.27l3.47,8.18a.35.35,0,0,1-.18.45l-4.22,1.79a.49.49,0,0,1-.65-.27l-3.42-8A.52.52,0,0,1,211.06,192.27Zm2.69,9.7.09.21a.25.25,0,0,0,.33.13l6.1-2.59a.17.17,0,0,0,.09-.22l-.12-.28a.25.25,0,0,0-.33-.13l-6,2.55A.26.26,0,0,0,213.75,202Zm1.06-1.89.23.53a.51.51,0,0,0,.65.27l2.17-.92a.5.5,0,0,0,.26-.66l-.22-.53a.5.5,0,0,0-.66-.26l-2.16.92A.5.5,0,0,0,214.81,200.08Zm4.58-.77.75-.32-3.61-8.5a.5.5,0,0,0-.65-.26l-.29.12Zm-5.74,2.43.75-.32-3.8-8.95-.29.12a.5.5,0,0,0-.26.65Z",
        treadmill_8:
          "M202.5,195.91l4.07-1.73a.5.5,0,0,1,.66.26l3.47,8.18a.35.35,0,0,1-.18.45l-4.22,1.79a.5.5,0,0,1-.65-.26l-3.41-8A.49.49,0,0,1,202.5,195.91Zm2.69,9.69.09.21a.26.26,0,0,0,.33.14l6.1-2.59a.19.19,0,0,0,.09-.23l-.12-.28a.25.25,0,0,0-.33-.13l-6,2.56A.25.25,0,0,0,205.19,205.6Zm1.07-1.88.22.52a.5.5,0,0,0,.66.27l2.16-.92a.5.5,0,0,0,.26-.66l-.22-.52a.5.5,0,0,0-.66-.27l-2.16.92A.5.5,0,0,0,206.26,203.72Zm4.58-.78.74-.31-3.61-8.5a.49.49,0,0,0-.65-.27L207,194Zm-5.74,2.43.74-.31-3.8-9-.28.12a.5.5,0,0,0-.27.66Z",
        treadmill_9:
          "M263.22,155.55l4.07-1.73a.49.49,0,0,1,.65.26l3.48,8.18a.35.35,0,0,1-.18.45L267,164.5a.5.5,0,0,1-.66-.26l-3.41-8A.49.49,0,0,1,263.22,155.55Zm2.69,9.69.09.22a.26.26,0,0,0,.33.13l6.09-2.59a.16.16,0,0,0,.09-.22l-.12-.29a.25.25,0,0,0-.32-.13l-6,2.56A.25.25,0,0,0,265.91,165.24Zm1.06-1.88.23.53a.49.49,0,0,0,.65.26l2.16-.92a.49.49,0,0,0,.27-.65l-.23-.53a.5.5,0,0,0-.65-.27l-2.16.92A.5.5,0,0,0,267,163.36Zm4.58-.78.75-.31-3.61-8.5a.5.5,0,0,0-.66-.27l-.28.12ZM265.81,165l.75-.32-3.8-9-.29.12a.51.51,0,0,0-.26.66Z",
        treadmill_10:
          "M254.66,159.18l4.07-1.73a.5.5,0,0,1,.66.27l3.47,8.18a.35.35,0,0,1-.18.45l-4.22,1.79a.51.51,0,0,1-.65-.27l-3.42-8A.52.52,0,0,1,254.66,159.18Zm2.69,9.7.09.21a.26.26,0,0,0,.33.13l6.1-2.59a.18.18,0,0,0,.09-.22l-.12-.29a.26.26,0,0,0-.33-.13l-6,2.56A.26.26,0,0,0,257.35,168.88Zm1.06-1.89.23.53a.5.5,0,0,0,.65.26l2.17-.92a.49.49,0,0,0,.26-.65l-.22-.53a.5.5,0,0,0-.66-.26l-2.16.91A.51.51,0,0,0,258.41,167Zm4.58-.77.75-.32-3.61-8.5a.51.51,0,0,0-.65-.27l-.29.13Zm-5.73,2.43.74-.32-3.8-9-.29.13a.49.49,0,0,0-.26.65Z",
        treadmill_11:
          "M246.1,162.81l4.07-1.73a.51.51,0,0,1,.66.27l3.47,8.18a.34.34,0,0,1-.18.45l-4.22,1.79a.49.49,0,0,1-.65-.27l-3.41-8A.5.5,0,0,1,246.1,162.81Zm2.69,9.7.09.21a.25.25,0,0,0,.33.13l6.1-2.59a.17.17,0,0,0,.09-.22l-.12-.28a.25.25,0,0,0-.33-.13l-6,2.55A.26.26,0,0,0,248.79,172.51Zm1.07-1.89.22.53a.5.5,0,0,0,.66.26l2.16-.91a.5.5,0,0,0,.26-.66l-.22-.53a.5.5,0,0,0-.66-.26l-2.16.92A.49.49,0,0,0,249.86,170.62Zm4.58-.77.74-.32-3.61-8.5a.49.49,0,0,0-.65-.26l-.29.12Zm-5.74,2.43.74-.32-3.8-9-.28.12a.49.49,0,0,0-.27.65Z",
        treadmill_12:
          "M237.54,166.44l4.08-1.72a.5.5,0,0,1,.65.26l3.47,8.18a.33.33,0,0,1-.18.45l-4.21,1.79a.5.5,0,0,1-.66-.26l-3.41-8A.51.51,0,0,1,237.54,166.44Zm2.7,9.7.09.21a.23.23,0,0,0,.32.13l6.1-2.58a.17.17,0,0,0,.09-.23l-.12-.28a.24.24,0,0,0-.33-.13l-6,2.56A.23.23,0,0,0,240.24,176.14Zm1.06-1.89.22.53a.5.5,0,0,0,.66.27l2.16-.92a.51.51,0,0,0,.27-.66l-.23-.52a.49.49,0,0,0-.65-.27l-2.17.92A.5.5,0,0,0,241.3,174.25Zm4.58-.77.75-.31L243,164.66a.5.5,0,0,0-.66-.26l-.28.12Zm-5.74,2.43.75-.31-3.81-9-.28.12a.51.51,0,0,0-.27.66Z",
        treadmill_13:
          "M229,170.08l4.07-1.73a.49.49,0,0,1,.65.26l3.48,8.18a.34.34,0,0,1-.19.45L232.79,179a.5.5,0,0,1-.66-.26l-3.41-8A.49.49,0,0,1,229,170.08Zm2.69,9.69.09.22a.26.26,0,0,0,.33.13l6.09-2.59a.16.16,0,0,0,.09-.22l-.12-.29a.25.25,0,0,0-.32-.13l-6,2.56A.25.25,0,0,0,231.68,179.77Zm1.06-1.88.22.53a.51.51,0,0,0,.66.26l2.16-.92a.49.49,0,0,0,.27-.65l-.23-.53a.5.5,0,0,0-.65-.27l-2.16.92A.5.5,0,0,0,232.74,177.89Zm4.58-.78.75-.31-3.61-8.5a.5.5,0,0,0-.66-.27l-.28.12Zm-5.74,2.43.75-.31-3.8-9-.29.12a.5.5,0,0,0-.26.66Z",
        treadmill_14:
          "M220.43,173.71,224.5,172a.5.5,0,0,1,.66.27l3.47,8.18a.35.35,0,0,1-.18.45l-4.22,1.79a.51.51,0,0,1-.65-.27l-3.42-8A.51.51,0,0,1,220.43,173.71Zm2.69,9.7.09.21a.26.26,0,0,0,.33.13l6.1-2.59a.18.18,0,0,0,.09-.22l-.12-.29a.26.26,0,0,0-.33-.13l-6,2.56A.26.26,0,0,0,223.12,183.41Zm1.06-1.89.23.53a.5.5,0,0,0,.65.26l2.17-.92a.49.49,0,0,0,.26-.65l-.22-.53a.5.5,0,0,0-.66-.26l-2.16.91A.51.51,0,0,0,224.18,181.52Zm4.58-.77.75-.32-3.61-8.5a.51.51,0,0,0-.65-.27l-.29.13ZM223,183.18l.74-.32-3.8-9-.29.13a.49.49,0,0,0-.26.65Z",
        treadmill_15:
          "M206,180.44l4.07-1.73a.5.5,0,0,1,.65.27l3.48,8.18a.35.35,0,0,1-.18.45l-4.22,1.79a.5.5,0,0,1-.66-.27l-3.41-8A.5.5,0,0,1,206,180.44Zm2.69,9.7.09.21a.24.24,0,0,0,.33.13l6.09-2.59a.16.16,0,0,0,.09-.22l-.12-.28a.23.23,0,0,0-.32-.13l-6,2.55A.26.26,0,0,0,208.73,190.14Zm1.06-1.89.23.53a.49.49,0,0,0,.65.26l2.16-.91a.5.5,0,0,0,.27-.66l-.23-.53a.49.49,0,0,0-.65-.26l-2.16.92A.49.49,0,0,0,209.79,188.25Zm4.58-.77.75-.32-3.61-8.5a.5.5,0,0,0-.66-.26l-.28.12Zm-5.74,2.43.75-.32-3.8-9-.29.12a.5.5,0,0,0-.26.65Z",
        treadmill_16:
          "M197.48,184.07l4.07-1.72a.51.51,0,0,1,.66.26l3.47,8.18a.35.35,0,0,1-.18.45L201.28,193a.49.49,0,0,1-.65-.26l-3.42-8A.52.52,0,0,1,197.48,184.07Zm2.69,9.7.09.21a.25.25,0,0,0,.33.13l6.1-2.58a.19.19,0,0,0,.09-.23l-.12-.28a.25.25,0,0,0-.33-.13l-6,2.56A.25.25,0,0,0,200.17,193.77Zm1.06-1.89.23.53a.49.49,0,0,0,.65.27l2.17-.92a.5.5,0,0,0,.26-.66l-.22-.52a.5.5,0,0,0-.66-.27l-2.16.92A.5.5,0,0,0,201.23,191.88Zm4.58-.77.75-.31L203,182.29a.5.5,0,0,0-.65-.26l-.29.12Zm-5.73,2.43.74-.31-3.8-9-.29.12a.5.5,0,0,0-.26.66Z",
        squat_rack_1:
          "M47.3,120h0a.38.38,0,0,1,.38-.38h1.5a.38.38,0,0,1,.37.38h0a.38.38,0,0,1-.38.37H47.68A.38.38,0,0,1,47.3,120ZM49.47,111h-2a.41.41,0,0,0-.41.41h0a.4.4,0,0,0,.41.4h2a.4.4,0,0,0,.41-.4h0A.4.4,0,0,0,49.47,111Zm-.25-1H47.73a.38.38,0,0,0-.38.38h0a.38.38,0,0,0,.37.37h1.5a.38.38,0,0,0,.38-.38h0A.38.38,0,0,0,49.22,110Zm-1.8,9.47h2a.4.4,0,0,0,.4-.4h0a.4.4,0,0,0-.4-.41h-2a.39.39,0,0,0-.4.4h0A.4.4,0,0,0,47.42,119.42Zm1.15-7.4H48.4a.25.25,0,0,0-.25.25v5.89a.24.24,0,0,0,.24.24h.17a.25.25,0,0,0,.25-.24l0-5.89A.25.25,0,0,0,48.57,112Zm5.78.15a.43.43,0,0,1-.39.27l-4.75,0a.15.15,0,0,0-.14.15V113a.14.14,0,0,0,.14.14l4.75,0a.4.4,0,0,1,.38.26.67.67,0,0,0,.6.46v-2.11A.64.64,0,0,0,54.35,112.17Zm0,4.4a.43.43,0,0,1-.38.27l-4.76,0a.14.14,0,0,0-.14.14v.4a.14.14,0,0,0,.14.14l4.75,0a.4.4,0,0,1,.38.26.65.65,0,0,0,.6.45v-2.11A.66.66,0,0,0,54.39,116.57Zm-6.49-3.63v-.35a.16.16,0,0,0-.16-.16H46.51a.17.17,0,0,0-.17.16v.36a.16.16,0,0,0,.16.16h1.23A.16.16,0,0,0,47.9,112.94Zm0,4.43V117a.17.17,0,0,0-.16-.17H46.49a.16.16,0,0,0-.16.16v.36a.16.16,0,0,0,.16.16h1.23A.16.16,0,0,0,47.88,117.37Z",
        squat_rack_2:
          "M47.3,107.35h0a.38.38,0,0,1,.38-.38h1.5a.38.38,0,0,1,.37.38h0a.38.38,0,0,1-.38.37H47.68A.39.39,0,0,1,47.3,107.35Zm2.17-9.08h-2a.41.41,0,0,0-.41.4h0a.41.41,0,0,0,.41.41h2a.41.41,0,0,0,.41-.41h0A.4.4,0,0,0,49.47,98.27Zm-.25-1H47.73a.38.38,0,0,0-.38.37h0a.38.38,0,0,0,.37.38h1.5a.38.38,0,0,0,.38-.38h0A.38.38,0,0,0,49.22,97.26Zm-1.8,9.48h2a.4.4,0,0,0,.4-.41h0a.4.4,0,0,0-.4-.4h-2a.4.4,0,0,0-.4.41h0A.4.4,0,0,0,47.42,106.74Zm1.15-7.4H48.4a.25.25,0,0,0-.25.24v5.89a.24.24,0,0,0,.24.25h.17a.25.25,0,0,0,.25-.25l0-5.88A.25.25,0,0,0,48.57,99.34Zm5.78.15a.43.43,0,0,1-.39.27l-4.75,0a.14.14,0,0,0-.14.14v.39a.15.15,0,0,0,.14.15H54a.41.41,0,0,1,.38.27.66.66,0,0,0,.6.45V99A.66.66,0,0,0,54.35,99.49Zm0,4.4a.42.42,0,0,1-.38.26H49.25a.14.14,0,0,0-.14.14v.39a.15.15,0,0,0,.14.15H54a.41.41,0,0,1,.38.27.66.66,0,0,0,.6.45v-2.11A.66.66,0,0,0,54.39,103.89Zm-6.49-3.63v-.35a.17.17,0,0,0-.16-.17H46.51a.17.17,0,0,0-.17.16v.36a.16.16,0,0,0,.16.16h1.23A.17.17,0,0,0,47.9,100.26Zm0,4.43v-.36a.16.16,0,0,0-.16-.16H46.49a.16.16,0,0,0-.16.16v.35a.17.17,0,0,0,.16.17h1.23A.16.16,0,0,0,47.88,104.69Z",
        squat_rack_3:
          "M47.3,94.67h0a.38.38,0,0,1,.38-.38h1.5a.39.39,0,0,1,.37.38h0a.38.38,0,0,1-.38.38H47.68A.38.38,0,0,1,47.3,94.67Zm2.17-9.08h-2A.41.41,0,0,0,47,86h0a.41.41,0,0,0,.41.41h2a.4.4,0,0,0,.41-.4h0A.4.4,0,0,0,49.47,85.59Zm-.25-1H47.73a.37.37,0,0,0-.38.37h0a.38.38,0,0,0,.37.38h1.5A.37.37,0,0,0,49.6,85h0A.38.38,0,0,0,49.22,84.58Zm-1.8,9.48h2a.4.4,0,0,0,.4-.4h0a.4.4,0,0,0-.4-.4h-2a.4.4,0,0,0-.4.4h0A.41.41,0,0,0,47.42,94.06Zm1.15-7.41H48.4a.25.25,0,0,0-.25.25v5.89a.24.24,0,0,0,.24.25h.17a.25.25,0,0,0,.25-.25l0-5.89A.26.26,0,0,0,48.57,86.65Zm5.78.16a.42.42,0,0,1-.39.26H49.21a.14.14,0,0,0-.14.14v.39a.15.15,0,0,0,.14.15H54a.41.41,0,0,1,.38.27.66.66,0,0,0,.6.45V86.36A.66.66,0,0,0,54.35,86.81Zm0,4.4a.42.42,0,0,1-.38.26H49.25a.14.14,0,0,0-.14.14V92a.14.14,0,0,0,.14.14l4.75,0a.41.41,0,0,1,.38.27.66.66,0,0,0,.6.45V90.76A.65.65,0,0,0,54.39,91.21ZM47.9,87.58v-.36a.16.16,0,0,0-.16-.16H46.51a.17.17,0,0,0-.17.16v.35a.17.17,0,0,0,.16.17h1.23A.17.17,0,0,0,47.9,87.58Zm0,4.42v-.35a.16.16,0,0,0-.16-.16H46.49a.17.17,0,0,0-.16.17V92a.16.16,0,0,0,.16.16h1.23A.17.17,0,0,0,47.88,92Z",
        squat_rack_4:
          "M47.3,82h0a.38.38,0,0,1,.38-.37h1.5a.38.38,0,0,1,.37.38h0a.38.38,0,0,1-.38.38H47.68A.38.38,0,0,1,47.3,82Zm2.17-9.08h-2a.41.41,0,0,0-.41.4h0a.4.4,0,0,0,.41.4h2a.4.4,0,0,0,.41-.4h0A.41.41,0,0,0,49.47,72.9Zm-.25-1H47.73a.38.38,0,0,0-.38.38h0a.38.38,0,0,0,.37.38h1.5a.38.38,0,0,0,.38-.37h0A.38.38,0,0,0,49.22,71.9Zm-1.8,9.47h2a.4.4,0,0,0,.4-.4h0a.41.41,0,0,0-.4-.41h-2a.4.4,0,0,0-.4.4h0A.4.4,0,0,0,47.42,81.37ZM48.57,74H48.4a.25.25,0,0,0-.25.25v5.89a.25.25,0,0,0,.24.25h.17a.25.25,0,0,0,.25-.25l0-5.89A.25.25,0,0,0,48.57,74Zm5.78.16a.42.42,0,0,1-.39.26l-4.75,0a.15.15,0,0,0-.14.15v.39a.14.14,0,0,0,.14.14l4.75,0a.4.4,0,0,1,.38.26.66.66,0,0,0,.6.46V73.68A.65.65,0,0,0,54.35,74.13Zm0,4.4a.44.44,0,0,1-.38.26l-4.76,0a.15.15,0,0,0-.14.15v.39a.14.14,0,0,0,.14.14l4.75,0a.4.4,0,0,1,.38.26.66.66,0,0,0,.6.46V78.08A.65.65,0,0,0,54.39,78.53ZM47.9,74.9v-.36a.16.16,0,0,0-.16-.16H46.51a.18.18,0,0,0-.17.17v.35a.16.16,0,0,0,.16.16h1.23A.17.17,0,0,0,47.9,74.9Zm0,4.42V79a.16.16,0,0,0-.16-.16H46.49a.16.16,0,0,0-.16.16v.36a.16.16,0,0,0,.16.16h1.23A.16.16,0,0,0,47.88,79.32Z",
        squat_rack_5:
          "M213.25,17h0a.38.38,0,0,1-.37.38h-1.5A.38.38,0,0,1,211,17h0a.38.38,0,0,1,.38-.37h1.5A.37.37,0,0,1,213.25,17Zm-2.16,9.08h2a.4.4,0,0,0,.4-.4h0a.4.4,0,0,0-.4-.41h-2a.4.4,0,0,0-.4.41h0A.4.4,0,0,0,211.09,26.09Zm.25,1h1.49a.38.38,0,0,0,.38-.38h0a.38.38,0,0,0-.38-.37h-1.49a.38.38,0,0,0-.38.38h0A.39.39,0,0,0,211.34,27.1Zm1.8-9.48h-2a.41.41,0,0,0-.41.4h0a.41.41,0,0,0,.41.41h2a.41.41,0,0,0,.41-.41h0A.4.4,0,0,0,213.14,17.62ZM212,25h.17a.25.25,0,0,0,.25-.24l0-5.89a.25.25,0,0,0-.24-.25H212a.26.26,0,0,0-.25.24v5.89A.25.25,0,0,0,212,25Zm-5.77-.15a.41.41,0,0,1,.38-.27l4.76,0a.14.14,0,0,0,.14-.14v-.39a.15.15,0,0,0-.14-.15h-4.76a.42.42,0,0,1-.37-.27.67.67,0,0,0-.61-.45v2.11A.66.66,0,0,0,206.21,24.87Zm0-4.4a.39.39,0,0,1,.38-.26h4.75a.15.15,0,0,0,.15-.14v-.39a.15.15,0,0,0-.14-.15h-4.76a.41.41,0,0,1-.38-.27.66.66,0,0,0-.6-.45v2.11A.66.66,0,0,0,206.17,20.47Zm6.49,3.63v.35a.17.17,0,0,0,.16.17h1.23a.16.16,0,0,0,.16-.16V24.1a.16.16,0,0,0-.16-.16h-1.23A.16.16,0,0,0,212.66,24.1Zm0-4.43V20a.17.17,0,0,0,.16.16h1.23a.17.17,0,0,0,.17-.16v-.35a.17.17,0,0,0-.16-.17h-1.23A.17.17,0,0,0,212.67,19.67Z",
        squat_rack_6:
          "M223.09,38.86h0a.38.38,0,0,1-.21.5l-1.38.56a.37.37,0,0,1-.49-.2h0a.37.37,0,0,1,.2-.49l1.39-.57A.37.37,0,0,1,223.09,38.86Zm1.48,9.22,1.86-.77a.39.39,0,0,0,.22-.52h0a.39.39,0,0,0-.52-.22l-1.87.76a.41.41,0,0,0-.22.53h0A.41.41,0,0,0,224.57,48.08Zm.61.83,1.38-.56a.39.39,0,0,0,.21-.49h0a.38.38,0,0,0-.5-.21l-1.38.57a.39.39,0,0,0-.21.49h0A.38.38,0,0,0,225.18,48.91Zm-2-9.44-1.86.77a.39.39,0,0,0-.22.52h0a.39.39,0,0,0,.52.22l1.87-.76a.41.41,0,0,0,.22-.53h0A.41.41,0,0,0,223.21,39.47ZM225,46.75l.16-.06a.25.25,0,0,0,.13-.33L223,40.91a.25.25,0,0,0-.32-.13l-.16.07a.24.24,0,0,0-.14.32l2.24,5.45A.25.25,0,0,0,225,46.75Zm-5.39,2.07a.42.42,0,0,1,.25-.39l4.4-1.81a.14.14,0,0,0,.07-.18l-.14-.37A.15.15,0,0,0,224,46l-4.4,1.8a.42.42,0,0,1-.45-.1.66.66,0,0,0-.73-.19l.8,2A.65.65,0,0,0,219.59,48.82Zm-1.72-4a.39.39,0,0,1,.25-.39l4.4-1.81a.13.13,0,0,0,.07-.18l-.15-.36a.13.13,0,0,0-.18-.08l-4.4,1.8a.39.39,0,0,1-.45-.1.68.68,0,0,0-.73-.19l.8,1.95A.67.67,0,0,0,217.87,44.77Zm7.38.87.14.33a.15.15,0,0,0,.21.08l1.14-.46a.17.17,0,0,0,.09-.21l-.14-.33a.17.17,0,0,0-.21-.09l-1.14.47A.17.17,0,0,0,225.25,45.64Zm-1.68-4.1.14.33a.17.17,0,0,0,.21.09l1.14-.47a.17.17,0,0,0,.09-.21L225,41a.17.17,0,0,0-.21-.09l-1.14.47A.17.17,0,0,0,223.57,41.54Z",
        squat_rack_7:
          "M227.94,50.58h0a.37.37,0,0,1-.2.49l-1.39.57a.37.37,0,0,1-.49-.2h0a.39.39,0,0,1,.21-.5l1.38-.56A.37.37,0,0,1,227.94,50.58Zm1.48,9.22,1.87-.77a.41.41,0,0,0,.22-.52h0a.41.41,0,0,0-.53-.23l-1.87.77a.42.42,0,0,0-.22.53h0A.42.42,0,0,0,229.42,59.8Zm.61.83,1.38-.57a.37.37,0,0,0,.21-.49h0a.37.37,0,0,0-.49-.2l-1.39.56a.38.38,0,0,0-.2.5h0A.37.37,0,0,0,230,60.63Zm-2-9.44L226.2,52a.41.41,0,0,0-.22.53h0a.41.41,0,0,0,.53.22l1.86-.77a.39.39,0,0,0,.22-.52h0A.39.39,0,0,0,228.07,51.19Zm1.76,7.28.16-.07a.24.24,0,0,0,.14-.32l-2.24-5.45a.25.25,0,0,0-.32-.13l-.16.06a.24.24,0,0,0-.13.33l2.23,5.44A.25.25,0,0,0,229.83,58.47Zm-5.39,2.06a.43.43,0,0,1,.25-.39l4.4-1.8a.15.15,0,0,0,.08-.19l-.15-.36a.15.15,0,0,0-.19-.08l-4.39,1.81a.44.44,0,0,1-.46-.1.65.65,0,0,0-.72-.19l.8,2A.65.65,0,0,0,224.44,60.53Zm-1.72-4a.41.41,0,0,1,.25-.39l4.4-1.81a.14.14,0,0,0,.08-.18l-.15-.37a.15.15,0,0,0-.19-.08l-4.39,1.81a.44.44,0,0,1-.46-.1.66.66,0,0,0-.73-.19l.81,2A.64.64,0,0,0,222.72,56.49Zm7.39.87.13.32a.15.15,0,0,0,.21.09l1.14-.47a.16.16,0,0,0,.09-.21l-.13-.32a.16.16,0,0,0-.22-.09l-1.13.46A.16.16,0,0,0,230.11,57.36Zm-1.68-4.1.13.33a.17.17,0,0,0,.21.09l1.14-.47A.17.17,0,0,0,230,53l-.14-.33a.16.16,0,0,0-.21-.09l-1.14.47A.15.15,0,0,0,228.43,53.26Z",
        squat_rack_8:
          "M232.8,62.3h0a.38.38,0,0,1-.21.49l-1.38.57a.38.38,0,0,1-.49-.21h0a.37.37,0,0,1,.2-.49l1.39-.57A.38.38,0,0,1,232.8,62.3Zm1.47,9.21,1.87-.76a.42.42,0,0,0,.22-.53h0a.41.41,0,0,0-.53-.22l-1.86.77a.39.39,0,0,0-.22.52h0A.39.39,0,0,0,234.27,71.51Zm.61.84,1.39-.57a.37.37,0,0,0,.2-.49h0a.39.39,0,0,0-.49-.21l-1.38.57a.38.38,0,0,0-.21.49h0A.37.37,0,0,0,234.88,72.35Zm-2-9.45-1.87.77a.42.42,0,0,0-.22.53h0a.42.42,0,0,0,.53.22l1.87-.77a.41.41,0,0,0,.22-.52h0A.41.41,0,0,0,232.92,62.9Zm1.77,7.29.16-.07a.25.25,0,0,0,.13-.32l-2.23-5.45a.26.26,0,0,0-.33-.14l-.16.07a.25.25,0,0,0-.13.32l2.23,5.45A.26.26,0,0,0,234.69,70.19Zm-5.39,2.06a.4.4,0,0,1,.25-.39l4.4-1.8a.15.15,0,0,0,.07-.19l-.15-.36a.14.14,0,0,0-.18-.08l-4.4,1.8a.39.39,0,0,1-.45-.1.66.66,0,0,0-.73-.18l.8,2A.69.69,0,0,0,229.3,72.25Zm-1.72-4a.4.4,0,0,1,.25-.39l4.39-1.8a.14.14,0,0,0,.08-.19l-.15-.36a.14.14,0,0,0-.18-.08l-4.4,1.81a.41.41,0,0,1-.45-.1.65.65,0,0,0-.73-.19l.8,1.95A.67.67,0,0,0,227.58,68.2Zm7.38.87.13.33a.18.18,0,0,0,.22.09l1.13-.47a.15.15,0,0,0,.09-.21l-.13-.33a.17.17,0,0,0-.21-.09l-1.14.47A.17.17,0,0,0,235,69.07ZM233.28,65l.13.33a.16.16,0,0,0,.22.08l1.13-.46a.15.15,0,0,0,.09-.21l-.13-.33a.17.17,0,0,0-.21-.09l-1.14.47A.17.17,0,0,0,233.28,65Z",
        squat_rack_9:
          "M237.65,74h0a.37.37,0,0,1-.21.49l-1.38.57a.39.39,0,0,1-.49-.21h0a.37.37,0,0,1,.2-.49l1.39-.57A.37.37,0,0,1,237.65,74Zm1.48,9.21,1.86-.76a.4.4,0,0,0,.22-.53h0a.4.4,0,0,0-.52-.22l-1.87.77a.4.4,0,0,0-.22.52h0A.4.4,0,0,0,239.13,83.23Zm.61.84,1.38-.57a.39.39,0,0,0,.21-.49h0a.39.39,0,0,0-.5-.21l-1.38.57a.37.37,0,0,0-.2.49h0A.38.38,0,0,0,239.74,84.07Zm-2-9.45-1.86.77a.39.39,0,0,0-.22.52h0a.39.39,0,0,0,.52.22l1.87-.76a.41.41,0,0,0,.22-.53h0A.41.41,0,0,0,237.77,74.62Zm1.77,7.28.16-.06a.23.23,0,0,0,.13-.32l-2.23-5.45a.25.25,0,0,0-.32-.14l-.16.07a.24.24,0,0,0-.14.32l2.24,5.45A.25.25,0,0,0,239.54,81.9ZM234.15,84a.42.42,0,0,1,.25-.39l4.4-1.81a.14.14,0,0,0,.07-.18l-.14-.36a.14.14,0,0,0-.19-.08l-4.4,1.8a.39.39,0,0,1-.45-.1.66.66,0,0,0-.73-.19l.8,2A.65.65,0,0,0,234.15,84Zm-1.72-4a.4.4,0,0,1,.25-.39l4.4-1.8a.15.15,0,0,0,.07-.19l-.14-.36a.16.16,0,0,0-.19-.08l-4.4,1.8a.39.39,0,0,1-.45-.1.68.68,0,0,0-.73-.19l.8,2A.69.69,0,0,0,232.43,79.92Zm7.38.87.14.33a.17.17,0,0,0,.21.09l1.14-.47a.17.17,0,0,0,.09-.21l-.14-.33a.17.17,0,0,0-.21-.09l-1.14.47A.17.17,0,0,0,239.81,80.79Zm-1.68-4.09.14.32a.16.16,0,0,0,.21.09l1.14-.47a.17.17,0,0,0,.09-.21l-.14-.33a.15.15,0,0,0-.21-.08l-1.14.46A.18.18,0,0,0,238.13,76.7Z",
        bench_press_1:
          "M205.5,88.56h-2.33a.43.43,0,0,0-.43.43h0a.44.44,0,0,0,.43.44h2.33a.44.44,0,0,0,.43-.44h0A.43.43,0,0,0,205.5,88.56Zm-1,2.75V89.72a.2.2,0,0,0-.21-.2h0a.2.2,0,0,0-.2.2v1.59a.21.21,0,0,0,.2.21h0A.21.21,0,0,0,204.54,91.31Zm1.88.24c0,.2-.06.25-.26.25h-3.68c-.22,0-.28-.07-.27-.29V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.49c0,.26,0,.4-.31.48a.61.61,0,0,0-.43.68H208a.81.81,0,0,0-.59-.73c-.16,0-.19-.13-.19-.28V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.63Zm-7.65-7.73h0a.43.43,0,0,1,.43.43V86a.43.43,0,0,1-.43.43h0a.43.43,0,0,1-.43-.43V84.25A.43.43,0,0,1,198.77,83.82Zm10.41,2.45V84a.47.47,0,0,0-.46-.46h0a.47.47,0,0,0-.47.46v2.32a.47.47,0,0,0,.47.46h0A.47.47,0,0,0,209.18,86.27Zm1.15-.29V84.27a.43.43,0,0,0-.43-.43h0a.43.43,0,0,0-.43.43V86a.43.43,0,0,0,.43.43h0A.43.43,0,0,0,210.33,86Zm-10.86-2v2.32a.46.46,0,0,0,.46.46h0a.47.47,0,0,0,.46-.46V84a.47.47,0,0,0-.46-.46h0A.46.46,0,0,0,199.47,84ZM208,85.29V85a.25.25,0,0,0-.25-.25h-6.81a.25.25,0,0,0-.25.25v.27a.25.25,0,0,0,.25.24h6.81A.25.25,0,0,0,208,85.29Zm-1.37-.78H207a.17.17,0,0,0,.17-.16V82.89a.17.17,0,0,0-.17-.16h-.46a.16.16,0,0,0-.16.16v1.46A.16.16,0,0,0,206.58,84.51Zm-5,0h.47a.15.15,0,0,0,.14-.15V82.88a.15.15,0,0,0-.14-.15h-.47a.15.15,0,0,0-.15.15v1.48A.15.15,0,0,0,201.61,84.51Z",
        bench_press_2:
          "M190.87,88.56h-2.33a.43.43,0,0,0-.43.43h0a.44.44,0,0,0,.43.44h2.33a.44.44,0,0,0,.43-.44h0A.43.43,0,0,0,190.87,88.56Zm-1,2.75V89.72a.2.2,0,0,0-.21-.2h0a.2.2,0,0,0-.2.2v1.59a.21.21,0,0,0,.2.21h0A.21.21,0,0,0,189.91,91.31Zm1.88.24c0,.2-.06.25-.26.25h-3.68c-.22,0-.28-.07-.27-.29V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.49c0,.26,0,.4-.31.48a.61.61,0,0,0-.43.68h7.26a.81.81,0,0,0-.59-.73c-.16,0-.19-.13-.19-.28V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.63Zm-7.65-7.73h0a.43.43,0,0,1,.43.43V86a.43.43,0,0,1-.43.43h0a.43.43,0,0,1-.43-.43V84.25A.43.43,0,0,1,184.14,83.82Zm10.41,2.45V84a.47.47,0,0,0-.46-.46h0a.47.47,0,0,0-.47.46v2.32a.47.47,0,0,0,.47.46h0A.47.47,0,0,0,194.55,86.27ZM195.7,86V84.27a.43.43,0,0,0-.43-.43h0a.43.43,0,0,0-.43.43V86a.43.43,0,0,0,.43.43h0A.43.43,0,0,0,195.7,86Zm-10.86-2v2.32a.47.47,0,0,0,.46.46h0a.47.47,0,0,0,.46-.46V84a.47.47,0,0,0-.46-.46h0A.47.47,0,0,0,184.84,84Zm8.48,1.34V85a.25.25,0,0,0-.25-.25h-6.81A.25.25,0,0,0,186,85v.27a.25.25,0,0,0,.25.24h6.81A.25.25,0,0,0,193.32,85.29ZM192,84.51h.46a.17.17,0,0,0,.17-.16V82.89a.17.17,0,0,0-.17-.16H192a.16.16,0,0,0-.16.16v1.46A.16.16,0,0,0,192,84.51Zm-5,0h.47a.15.15,0,0,0,.14-.15V82.88a.15.15,0,0,0-.14-.15H187a.15.15,0,0,0-.15.15v1.48A.15.15,0,0,0,187,84.51Z",
        bench_press_3:
          "M176.24,88.56h-2.33a.43.43,0,0,0-.43.43h0a.44.44,0,0,0,.43.44h2.33a.44.44,0,0,0,.43-.44h0A.43.43,0,0,0,176.24,88.56Zm-1,2.75V89.72a.2.2,0,0,0-.21-.2h0a.2.2,0,0,0-.2.2v1.59a.21.21,0,0,0,.2.21h0A.21.21,0,0,0,175.28,91.31Zm1.88.24c0,.2-.06.25-.26.25h-3.68c-.22,0-.28-.07-.27-.29V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.49c0,.26-.05.4-.31.48a.61.61,0,0,0-.43.68h7.26a.81.81,0,0,0-.59-.73c-.16,0-.19-.13-.19-.28V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.63Zm-7.65-7.73h0a.43.43,0,0,1,.43.43V86a.43.43,0,0,1-.43.43h0a.43.43,0,0,1-.43-.43V84.25A.43.43,0,0,1,169.51,83.82Zm10.41,2.45V84a.47.47,0,0,0-.46-.46h0A.46.46,0,0,0,179,84v2.32a.46.46,0,0,0,.46.46h0A.47.47,0,0,0,179.92,86.27Zm1.15-.29V84.27a.43.43,0,0,0-.43-.43h0a.43.43,0,0,0-.43.43V86a.43.43,0,0,0,.43.43h0A.43.43,0,0,0,181.07,86Zm-10.86-2v2.32a.47.47,0,0,0,.46.46h0a.47.47,0,0,0,.46-.46V84a.47.47,0,0,0-.46-.46h0A.47.47,0,0,0,170.21,84Zm8.48,1.34V85a.25.25,0,0,0-.25-.25h-6.81a.25.25,0,0,0-.25.25v.27a.25.25,0,0,0,.25.24h6.81A.25.25,0,0,0,178.69,85.29Zm-1.37-.78h.46a.17.17,0,0,0,.17-.16V82.89a.17.17,0,0,0-.17-.16h-.46a.16.16,0,0,0-.16.16v1.46A.16.16,0,0,0,177.32,84.51Zm-5,0h.47a.15.15,0,0,0,.14-.15V82.88a.15.15,0,0,0-.14-.15h-.47a.15.15,0,0,0-.15.15v1.48A.15.15,0,0,0,172.35,84.51Z",
        bench_press_4:
          "M161.61,88.56h-2.33a.43.43,0,0,0-.43.43h0a.44.44,0,0,0,.43.44h2.33A.44.44,0,0,0,162,89h0A.43.43,0,0,0,161.61,88.56Zm-1,2.75V89.72a.2.2,0,0,0-.21-.2h0a.2.2,0,0,0-.2.2v1.59a.21.21,0,0,0,.2.21h0A.21.21,0,0,0,160.65,91.31Zm1.88.24c0,.2-.06.25-.26.25h-3.68c-.22,0-.28-.07-.27-.29V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.49c0,.26-.05.4-.31.48a.61.61,0,0,0-.43.68h7.26a.81.81,0,0,0-.59-.73c-.16,0-.19-.13-.19-.28V85.92a.11.11,0,0,0-.11-.1h-.55a.11.11,0,0,0-.11.1v5.63Zm-7.65-7.73h0a.43.43,0,0,1,.43.43V86a.43.43,0,0,1-.43.43h0a.43.43,0,0,1-.43-.43V84.25A.43.43,0,0,1,154.88,83.82Zm10.41,2.45V84a.47.47,0,0,0-.46-.46h0a.46.46,0,0,0-.46.46v2.32a.46.46,0,0,0,.46.46h0A.47.47,0,0,0,165.29,86.27Zm1.15-.29V84.27a.43.43,0,0,0-.43-.43h0a.43.43,0,0,0-.43.43V86a.43.43,0,0,0,.43.43h0A.43.43,0,0,0,166.44,86Zm-10.86-2v2.32a.47.47,0,0,0,.46.46h0a.47.47,0,0,0,.46-.46V84a.47.47,0,0,0-.46-.46h0A.47.47,0,0,0,155.58,84Zm8.48,1.34V85a.25.25,0,0,0-.25-.25H157a.25.25,0,0,0-.25.25v.27a.25.25,0,0,0,.25.24h6.81A.25.25,0,0,0,164.06,85.29Zm-1.37-.78h.46a.17.17,0,0,0,.17-.16V82.89a.17.17,0,0,0-.17-.16h-.46a.16.16,0,0,0-.16.16v1.46A.16.16,0,0,0,162.69,84.51Zm-5,0h.47a.15.15,0,0,0,.14-.15V82.88a.15.15,0,0,0-.14-.15h-.47a.15.15,0,0,0-.15.15v1.48A.15.15,0,0,0,157.72,84.51Z"
      };

      const updatedStatus = status;

      return <path d={paths[convertedName]} className={updatedStatus} id={name} />;
    }

    function handleOccupancy(vacancy, name) {
      if (vacancy == 1) {
        let status = "occupied";
        console.log("Vacancy: ", vacancy, " Name: ", name);
        return Equipment(name, status);
      } else {
        let status = "unoccupied";
        // console.log('Vacancy: ', vacancy, ' Name: ', name);
        return Equipment(name, status);
      }
    }
    return this.state.equipment.map(equipment =>
      handleOccupancy(equipment.vacancy, equipment.equipment_name)
    );
  }
}
export default Equipment;
