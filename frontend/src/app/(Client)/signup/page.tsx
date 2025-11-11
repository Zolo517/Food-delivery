import { FormSection } from "./_feature/FormSection";


export default function SignupPage() {
  // const result = axios.post('https://localhost:4000/auth/login',{
  //   headers:{
  //     Authorization : ``
  //   }
  // })

  return (
    <div className="p-5 flex gap-12 ">
      <FormSection />
      <div className="w-full bg-[#1d293d] "></div>
    </div>
  );
}
