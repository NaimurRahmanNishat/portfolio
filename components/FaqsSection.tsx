import React from 'react'
import SectionHeading from './SectionHeading'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Accordion from './Accordion'
import { faqs } from '@/constants'

const FaqsSection = () => {
  return (
    <section className="max-width section-padding overflow-hidden">
        <SectionHeading title="Frequently Asked Question"
        subtitle="Vel, eum eligendi! Modi vitae enim itaque ex ducimus eaque maiores repellendus explicabo impedit option
         ratione provident earum,"
        />
        <div className="flex flex-col tablet:flex-row gap-5 items-start">
            <div className="box">
                {/* fasq according */}
                <Accordion data={faqs}/>
            </div>
            <div className="box flex flex-col gap-5 tablet:max-w-md">
                <div className="w-16 h-16 rounded bg-purple-100 text-purple flex items-center justify-center flex-shrink-0
                mb-2">
                    <Star fill="currentColor" size={30}/>
                </div>
                <div>
                    <h5 className="text-gray-700 mb-2">Still have any Question?</h5>
                    <p className="text-gray-600">
                        Vel, eum eligendi! Modi vitae enim itaque ex ducimus eaque maiores repellendus explicabo
                        impedit option ratione provident earum,</p>
                </div>
                <Link href={"/contact"} className="btn btn-primary w-max">
                    Contact me <ArrowRight/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default FaqsSection