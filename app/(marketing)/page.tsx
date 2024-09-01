import React from "react"
import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import ApiClient from "@/components/api-client"
import { FeaturesBento } from "@/components/features-bento"
import { HoverBorderGradient } from "@/components/hover-border-gradient"
import ScanPreview from "@/components/scan-preview"
import { Spotlight } from "@/components/spotlight"
import { FeaturesScroll } from "@/components/features-scroll"
import { trackEvent } from "@/lib/analytics"



export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div
            // href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          >
           <svg width="210" height="56" fill="none" viewBox="0 0 332 56"><path fill="#fff" d="M106.313 5.588H87.901v4.603h13.517a4.89 4.89 0 0 1 4.895 4.895v4.02A4.87 4.87 0 0 1 101.418 24h-18.12v-4.603h18.412v-4.603H88.193a4.89 4.89 0 0 1-4.895-4.895V5.88A4.87 4.87 0 0 1 88.193.986h18.12v4.603ZM128.632.985c2.723 0 4.928 2.172 4.928 4.895v13.225c0 2.723-2.205 4.895-4.928 4.895h-14.165a4.87 4.87 0 0 1-4.895-4.895V5.88a4.87 4.87 0 0 1 4.895-4.895h14.165Zm.292 4.603h-14.749v13.809h14.749V5.588Zm12.832 13.647h17.958v4.96h-19.741a3.182 3.182 0 0 1-3.177-3.177V.79h4.96v18.444ZM182.944.985c2.204 0 3.987 1.75 3.987 3.955V24h-4.636v-7.553h-14.749V24h-4.603V4.94a3.93 3.93 0 0 1 3.955-3.955h16.046Zm-.649 4.603h-14.749v6.256h14.749V5.588ZM209.519.985h4.636v20.033c0 1.653-1.362 2.982-3.015 2.982h-3.566c-1.134.032-2.139-.584-2.658-1.588L195.97 5.588h-1.2V24h-4.603V4c0-1.686 1.329-3.015 2.983-3.015h3.76c1.102 0 2.139.584 2.658 1.588l8.946 16.824h1.005V.985Zm27.872 0c2.205 0 3.987 1.75 3.987 3.955V24h-4.635v-7.553h-14.749V24h-4.603V4.94a3.93 3.93 0 0 1 3.955-3.955h16.045Zm-.648 4.603h-14.749v6.256h14.749V5.588Zm-130.884 30H87.901v4.603h17.958v4.603H87.901V54h-4.603V30.985h22.561v4.603Zm22.299-4.603c2.722 0 4.927 2.172 4.927 4.895v13.225c0 2.723-2.205 4.895-4.927 4.895h-14.166a4.87 4.87 0 0 1-4.895-4.895V35.88a4.87 4.87 0 0 1 4.895-4.895h14.166Zm.291 4.603H113.7v13.809h14.749V35.588Zm27.224-4.603h4.635v15.3c-.032 4.279-3.468 7.715-7.747 7.715h-8.525a7.692 7.692 0 0 1-7.715-7.715v-15.3h4.603v14.36a4.053 4.053 0 0 0 4.052 4.052h6.645a4.053 4.053 0 0 0 4.052-4.052v-14.36Zm27.224 0h4.635v20.033c0 1.653-1.361 2.982-3.014 2.982h-3.566c-1.135.032-2.139-.584-2.658-1.588l-8.947-16.824h-1.199V54h-4.603V34c0-1.686 1.329-3.015 2.982-3.015h3.76c1.102 0 2.14.584 2.658 1.589l8.947 16.823h1.005V30.985Zm24.112 0c4.279 0 7.715 3.469 7.747 7.715v7.585c-.032 4.279-3.468 7.715-7.747 7.715h-16.24V30.985h16.24Zm3.112 8.687c0-2.269-1.816-4.084-4.052-4.084h-10.697v13.809h10.697a4.054 4.054 0 0 0 4.052-4.052v-5.673Zm27.872-8.687c2.204 0 3.987 1.75 3.987 3.955V54h-4.635v-7.553h-14.749V54h-4.603V34.94a3.929 3.929 0 0 1 3.954-3.955h16.046Zm-.648 4.603h-14.749v6.256h14.749v-6.256Zm7.871-4.603h23.015v4.603h-9.206V54h-4.603V35.588h-9.206v-4.603ZM276.094 54h-4.603V30.985h4.603V54Zm22.307-23.015c2.723 0 4.927 2.172 4.927 4.895v13.225c0 2.723-2.204 4.895-4.927 4.895h-14.165a4.87 4.87 0 0 1-4.895-4.895V35.88a4.87 4.87 0 0 1 4.895-4.895h14.165Zm.292 4.603h-14.749v13.809h14.749V35.588Zm27.224-4.603h4.635v20.033c0 1.653-1.361 2.982-3.014 2.982h-3.566c-1.135.032-2.139-.584-2.658-1.588l-8.947-16.824h-1.199V54h-4.603V34c0-1.686 1.329-3.015 2.982-3.015h3.76c1.102 0 2.14.584 2.658 1.589l8.947 16.823h1.005V30.985Z"></path><g clip-path="url(#sol)"><path fill="url(#solfoundation)" d="m59.127 43.477-9.81 10.541a2.277 2.277 0 0 1-1.668.726H1.14a1.138 1.138 0 0 1-1.123-1.335c.038-.22.139-.422.29-.585l9.819-10.541a2.277 2.277 0 0 1 1.662-.725h46.508a1.137 1.137 0 0 1 1.044.686 1.144 1.144 0 0 1-.212 1.233Zm-9.81-21.226a2.277 2.277 0 0 0-1.668-.726H1.14A1.138 1.138 0 0 0 .016 22.86c.038.219.139.422.29.585l9.819 10.54a2.277 2.277 0 0 0 1.662.726h46.508a1.139 1.139 0 0 0 1.122-1.334 1.142 1.142 0 0 0-.29-.585l-9.81-10.542ZM1.138 14.678h46.51a2.273 2.273 0 0 0 1.667-.726l9.811-10.54a1.142 1.142 0 0 0-.833-1.92H11.788a2.275 2.275 0 0 0-1.662.725L.309 12.759a1.142 1.142 0 0 0 .83 1.92Z"></path></g><defs><linearGradient id="solfoundation" x1="5.017" x2="53.889" y1="56.013" y2="1.019" gradientUnits="userSpaceOnUse"><stop offset=".08" stop-color="#9945FF"></stop><stop offset=".3" stop-color="#8752F3"></stop><stop offset=".5" stop-color="#5497D5"></stop><stop offset=".6" stop-color="#43B4CA"></stop><stop offset=".72" stop-color="#28E0B9"></stop><stop offset=".97" stop-color="#19FB9B"></stop></linearGradient><clipPath id="sol"><path fill="#fff" d="M0 1.493h59.434v53.25H0z"></path></clipPath></defs></svg>
          </div>
          <Spotlight
            className="-top-50 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-8xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Safeguarding every solana user
            </h1>
            <p className="mt-2 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
            from fraudulent and malicious transactions and smart contracts.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="/early-access"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get Early Access
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
        <br />
        <div className="mt-8">
          <ScanPreview />
        </div>
      </section>
      <section
        id="features"
        className="container bg-slate-50 py-8 dark:bg-transparent"
      >
        {/* <FeaturesScroll content={featuresContent} /> */}
        <FeaturesBento />
      </section>
      <section id="open-source" className="container py-12 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-centear my-16">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            SIFU is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={"https://github.com/pratik-codes/Blockchain-Audit-Platform"}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  )
}
