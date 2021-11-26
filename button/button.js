function Button({className = '', size, color, ...rest}){
    const sizeClasssName = size ? `btn--${size}` : '';
    const colorClasssName = color ? `btn--${color}` : '';
    return <button className={`${className} ${sizeClasssName} ${colorClasssName}`} {...rest} />

}
export default  Button;
