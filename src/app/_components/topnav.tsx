"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {

  const router = useRouter();
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-bold border-b-2 p-4">
        <div>Gallery</div>

        <div className="flex flex-row">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
              <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
                router.refresh();
              }} />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }