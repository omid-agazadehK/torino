import { object, string } from "yup";

let userSchema = object({
  fullName: string()
    .required("وارد کردن نام و نام خانوادگی الزامی است")
    .min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد")
    .max(50, "نام و نام خانوادگی نمی‌تواند بیش از ۵۰ حرف باشد"),
  nationalCode: string()
    .required("کد ملی الزامی است")
    .matches(/^\d{10}$/, "کد ملی باید دقیقاً ۱۰ رقم باشد"),
  gender: string()
    .required("انتخاب جنسیت الزامی است")
    .oneOf(["male", "female"], "جنسیت انتخاب‌شده معتبر نیست"),
});
let accountDataSchema = object({
  email: string().email("فرمت ایمیل اشتباه است"),
});
let userProfileSchema = object({
  fullName: string()
    .transform((value) => (value === "" ? undefined : value))
    .optional()
    .trim()
    .min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد")
    .max(50, "نام و نام خانوادگی نمی‌تواند بیش از ۵۰ حرف باشد"),

  nationalCode: string()
    .transform((value) => (value === "" ? undefined : value))
    .optional()
    .trim()
    .matches(/^\d{10}$/, "کد ملی باید دقیقاً ۱۰ رقم باشد"),

  gender: string()
    .transform((value) => (value === "" ? undefined : value))
    .optional()
    .oneOf(["male", "female"], "جنسیت انتخاب‌شده معتبر نیست"),
});
let userBankSchema = object({
  shaba_code: string()
    .transform((value) => (value === "" ? undefined : value))
    .optional()
    .trim()
    .min(24, "شماره شبا باید حداقل ۲۴ رقم باشد")
    .max(26, "شماره شبا نمی‌تواند بیش از ۲۶ رقم باشد"),

  debitCard_code: string()
    .transform((value) => (value === "" ? undefined : value))
    .optional()
    .trim()
    .matches(/^\d{16}$/, "شماره کارت باید دقیقاً ۱۶ رقم باشد"),

  accountIdentifier: string()
    .transform((value) => (value === "" ? undefined : value))
    .optional()
    .test(
      "length-check",
      "شماره حساب باید بین ۵ تا ۲۰ رقم باشد",
      function (value) {
        if (!value) return true;
        return value.length >= 5 && value.length <= 20;
      },
    ),
});
export { userSchema, accountDataSchema, userProfileSchema, userBankSchema };
