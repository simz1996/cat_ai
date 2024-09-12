import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-bold border-b-2 p-4">
        <div>Gallery</div>

        <div><SignedOut>
            <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }