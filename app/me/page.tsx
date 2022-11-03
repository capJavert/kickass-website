import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import { getData } from './data'

const Page = async () => {
    const { data } = await getData()

    return (
        <div className="wrapper">
            <div className="top-line">
                <div className="color-swatch swatch-100 red"></div>
            </div>

            {/* <!-- About Section --> */}
            <section id="about" className="container content-section text-center">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.page.title.markup
                            }}
                        />
                        <p>{data.me.about}</p>
                        <p className="contact-buttons">
                            {!!data.me.cv && (
                                <Link target="_blank" className="btn btn-default btn-lg btn-thumb" href={data.me.cv}>
                                    <i>
                                        <Image
                                            className="img-circle"
                                            width={29}
                                            height={29}
                                            src="https://avatars0.githubusercontent.com/u/9803078?v=4&u=1c51db45f535cc563b4ef7f923d09a1d78eda358&s=400"
                                            alt=""
                                        />
                                    </i>
                                    <span>Download CV</span>
                                </Link>
                            )}
                            {!!data.me.email && (
                                <Link
                                    className="btn btn-default btn-lg btn-thumb btn-hi"
                                    href={`mailto:${data.me.email}`}
                                >
                                    <i className="fa fa-envelope"></i>
                                    <span>Say Hi</span>
                                </Link>
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- what i do --> */}
            {data.skills.length > 0 && (
                <section id="skills" className="container content-section text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>
                                Skill<span className="highlight">z</span>
                            </h2>
                            {data.skills.map((skill: Record<string, any>) => {
                                return (
                                    <a key={skill.id} target="_blank" href={skill.url} rel="noreferrer">
                                        <div className="col-sm-2 skill-box">
                                            <span className="skill-text">
                                                {skill.title.split(' ').map((part: string, index: number) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            {part}
                                                            <br />
                                                        </Fragment>
                                                    )
                                                })}
                                            </span>
                                            <div className={`devicons devicons-${skill.name}`}></div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* <!-- Follow Section --> */}
            {data.social.length > 0 && (
                <section id="follow" className="container content-section text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>
                                Find me on social <span className="highlight">media</span>
                            </h2>
                            <ul className="list-inline banner-social-buttons">
                                {data.social.map((item: Record<string, any>) => {
                                    return (
                                        <li key={item.id}>
                                            <Link target="_blank" href={item.url} className="btn btn-default btn-lg">
                                                <i className={`fa fa-${item.network} fa-fw`}></i>{' '}
                                                <span className="network-name">{item.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Page
