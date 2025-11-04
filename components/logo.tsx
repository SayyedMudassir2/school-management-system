import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={170} height={20} />
    </Link>
  )
}
