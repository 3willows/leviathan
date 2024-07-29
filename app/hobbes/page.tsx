"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Page() {
  const pathname = usePathname()

  return (
    <div className="bg-[#f5f5f5] text-[#333] font-serif mx-auto max-w-4xl px-8 py-12 shadow-lg">
      <h1 className="text-4xl font-bold mb-8">
        Thomas Hobbes &rsquo;s Leviathan
      </h1>
      <h2 className="text-4xl font-bold mb-8">Table of Contents</h2>
      <ol className="list-decimal list-inside space-y-6">
        <li>
          <Link href={`${pathname}/chapter/1`}> OF SENSE</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/2`}> OF IMAGINATION</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/3`}>
            {" "}
            OF THE CONSEQUENCE OR TRAYNE OF IMAGINATIONS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/4`}> OF SPEECH</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/5`}> OF REASON, AND SCIENCE.</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/6`}>
            OF THE INTERIOUR BEGINNINGS OF VOLUNTARY MOTIONS COMMONLY CALLED
            THEPASSIONS, AND THE SPEECHES BY WHICH THEY ARE EXPRESSED.
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/7`}>
            {" "}
            OF THE ENDS OR RESOLUTIONS OF DISCOURSE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/8`}>
            OF THE VERTUES COMMONLY CALLED INTELLECTUAL, AND THEIR
            CONTRARYDEFECTS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/9`}>
            {" "}
            OF THE SEVERALL SUBJECTS OF KNOWLEDGE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/10`}>
            {" "}
            OF POWER, WORTH, DIGNITY, HONOUR AND WORTHINESS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/1`}>
            {" "}
            OF THE DIFFERENCE OF MANNERS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/2`}> OF RELIGION</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/13`}>
            OF THE NATURALL CONDITION OF MANKIND, AS CONCERNING THEIR
            FELICITY,AND MISERY
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/14`}>
            OF THE FIRST AND SECOND NATURALL LAWES, AND OF CONTRACTS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/5`}> OF OTHER LAWES OF NATURE</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/6`}>
            {" "}
            OF PERSONS, AUTHORS, AND THINGS PERSONATED
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/17`}>
            OF THE CAUSES, GENERATION, AND DEFINITION OF A COMMON-WEALTH
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/18`}>
            . OF THE RIGHTS OF SOVERAIGNES BY INSTITUTION
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/19`}>
            OF THE SEVERALL KINDS OF COMMON-WEALTH BY INSTITUTION, AND
            OFSUCCESSION TO THE SOVERAIGNE POWER
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/0`}>
            {" "}
            OF DOMINION PATERNALL AND DESPOTICALL
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/1`}>
            {" "}
            OF THE LIBERTY OF SUBJECTS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/22`}>
            {" "}
            OF SYSTEMES SUBJECT, POLITICALL, AND PRIVATE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/23`}>
            . OF THE PUBLIQUE MINISTERS OF SOVERAIGN POWER
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/24`}>
            OF THE NUTRITION, AND PROCREATION OF A COMMON-WEALTH
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/5`}> OF COUNSELL</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/6`}> OF CIVILL LAWES</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/7`}>
            {" "}
            . OF CRIMES, EXCUSES, AND EXTENUATIONS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/8`}>
            {" "}
            I. OF PUNISHMENTS, AND REWARDS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/29`}>
            OF THOSE THINGS THAT WEAKEN, OR TEND TO THE DISSOLUTION OF
            ACOMMON-WEALTH
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/30`}>
            {" "}
            OF THE OFFICE OF THE SOVERAIGN REPRESENTATIVE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/1`}>
            {" "}
            OF THE KINGDOME OF GOD BY NATURE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/2`}>
            {" "}
            . OF THE PRINCIPLES OF CHRISTIAN POLITIQUES
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/33`}>
            I. OF THE NUMBER, ANTIQUITY, SCOPE, AUTHORITY, AND INTERPRETERS OF
            THEBOOKS OF HOLY SCRIPTURE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/34`}>
            . OF THE SIGNIFICATION OF SPIRIT, ANGEL, AND INSPIRATION IN THE
            BOOKSOF HOLY SCRIPTURE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/35`}>
            OF THE SIGNIFICATION IN SCRIPTURE OF KINGDOME OF GOD, OF HOLY,
            SACRED,AND SACRAMENT
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/6`}>
            {" "}
            . OF THE WORD OF GOD, AND OF PROPHETS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/7`}>
            {" "}
            I. OF MIRACLES, AND THEIR USE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/38`}>
            II. OF THE SIGNIFICATION IN SCRIPTURE OF ETERNALL LIFE,
            HELL,SALVATION, THE WORLD TO COME, AND REDEMPTION
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/39`}>
            . OF THE SIGNIFICATION IN SCRIPTURE OF THE WORD CHURCH
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/40`}>
            OF THE RIGHTS OF THE KINGDOME OF GOD, IN ABRAHAM, MOSES, HIGH
            PRIESTS,AND THE KINGS OF JUDAH
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/1`}>
            {" "}
            OF THE OFFICE OF OUR BLESSED SAVIOUR
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/2`}> OF POWER ECCLESIASTICALL</Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/43`}>
            . OF WHAT IS NECESSARY FOR A MANS RECEPTION INTO THE KINGDOME
            OFHEAVEN
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/44`}>
            OF SPIRITUALL DARKNESSE FROM MISINTERPRETATION OF SCRIPTURE
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/45`}>
            OF DAEMONOLOGY, AND OTHER RELIQUES OF THE RELIGION OF THE GENTILES
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/46`}>
            OF DARKNESSE FROM VAIN PHILOSOPHY, AND FABULOUS TRADITIONS
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/chapter/47`}>
            OF THE BENEFIT THAT PROCEEDETH FROM SUCH DARKNESSE, AND TO WHOM
            ITACCREWETH
          </Link>
        </li>
      </ol>
    </div>
  )
}
