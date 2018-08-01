import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static shouldBeSameAsOld(control: AbstractControl) : Promise< ValidationErrors | null>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) !== '1234') 
                    resolve({ shouldBeSameAsOld: true });
                else 
                    resolve(null);
            }, 1000);
        });
    }

    static shouldBeSameAsNew(control: AbstractControl)  {
        let newPassword = control.get('newpassword');
        let confirmPassword = control.get('confirmpassword');
        
        if (newPassword.value !== confirmPassword.value) 
             return { shouldBeSameAsNew: true };
        
        return null;
         
    }
}