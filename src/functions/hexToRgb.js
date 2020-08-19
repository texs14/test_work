const hexToRgb = (hexstr) => { 

    const hexdec = (hexString) => {
  
        hexString = (hexString + '').replace(/[^a-f0-9]/gi, '')
        return parseInt(hexString, 16)
    }

    let int = hexdec(hexstr); 
    return 'rgb(' + ( 0xFF & (int >> 0x10)) + ', ' + (0xFF & (int >> 0x8)) + ', ' + (0xFF & int) + ')'; 
}

export default hexToRgb;