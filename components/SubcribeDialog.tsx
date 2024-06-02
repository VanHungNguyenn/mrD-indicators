import { ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { socialLink } from '@/constants/socialLink';
import Link from 'next/link';


export function SubcribeDialog({ children, customLinkTelegram = '' }: { readonly children: ReactNode, readonly customLinkTelegram?: string }) {
    let telegramLink = socialLink.find((social) => social.title === 'Telegram')?.link ?? '#'
    const discordLink = socialLink.find((social) => social.title === 'Discord')?.link ?? '#'

    if (customLinkTelegram) {
        telegramLink = customLinkTelegram
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#202737] rounded-lg border-none">
                <DialogHeader>
                    <DialogTitle>Subcribe</DialogTitle>
                    <DialogDescription>
                        Access all the features and receive trading signals with telegram and discord.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center gap-2">
                    <Link href={telegramLink}>
                        <Button variant="blue">Telegram</Button>
                    </Link>
                    <Link href={discordLink}>
                        <Button variant="blue">Discord</Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}