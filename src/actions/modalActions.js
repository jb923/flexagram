export const OPEN_MODAL = "flexagram/modal/OPEN_MODAL";
export const CLOSE_MODAL = "flexagram/modal/CLOSE_MODAL";

export const openModal = modal => ({ type: OPEN_MODAL, modal });
export const closeModal = () => ({ type: CLOSE_MODAL });