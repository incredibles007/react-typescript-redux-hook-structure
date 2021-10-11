const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const isEmail = (email:any) => emailRegex.test(email);

export default isEmail;
