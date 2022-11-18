const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848a'
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 250ms ease ;
      &:hover{
        box-shadow: 0px 1px 4px 1px #ccc;
      }
    `
  }

}



export default theme