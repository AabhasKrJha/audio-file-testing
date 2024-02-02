"use client";


import { Button } from "@/components/ui/button";
import Link from "next/link";

import { SignedOut, SignedIn, UserButton, } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

    let emailID  : any = user? user.primaryEmailAddress : "";
    if(emailID === null || emailID === ""){
        emailID = "";
    } else{
        emailID = emailID["emailAddress"];
    }
    
    let admin: Boolean = false;
    if (emailID === "abhasjha03@gmail.com"){
        admin = true;
    }

    return(
        <div className="flex items-center justify-center gap-4">
            
            <SignedIn>
                <UserButton />
                {(admin === false)? "" : (
                <Button>
                    <Link href="/dashboard">Dashboard</Link>
                </Button>
                )}
            </SignedIn>

            <SignedOut>
                <Button>
                    <Link href="/sign-in">Login</Link>
                </Button>
            </SignedOut>
            
            {/* <script type="text/javascript">
                function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                }
            </script> */}
        </div>
    )
}

// DATABASE_URL="postgres://postgres.hmtpilwzvlvgshiyfauj:Gaumahima2023@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"