class Cup {
  constructor(
    capacity,
    design,
    hasHandle,
    isEmpty,
    contentsType,
    contentsTemp
  ) {
    (this.capacity = capacity),
      (this.design = design),
      (this.hasHandle = hasHandle),
      (this.isEmpty = isEmpty),
      (this.contentsType = contentsType),
      (this.contentsTemp = contentsTemp);
  }
  changeContentsType(newContentsType) {
    this.contentsType = newContentsType;
  }
}

export default Cup;
