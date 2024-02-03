const headerPos = 106;
const onePostOption = 104;
export const currentDevicePort = window.screen.height + 200;
export const currentWindowPort = (screen: number) => screen + 200;
export const initialStateContentHeight = (posts: number) => headerPos + onePostOption * posts;
