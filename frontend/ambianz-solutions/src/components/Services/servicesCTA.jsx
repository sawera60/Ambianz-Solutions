import React from 'react'
import { Link } from 'react-router-dom'

const ServicesCTA = () => {
    return (
        <div style={{ width: '100%' }}>

            {/* ── DARK CTA BAND ── */}
            <div style={{
                background: '#e8ebe7ff',
                display: 'grid',
                gridTemplateColumns: '1fr 1px 1fr',
                minHeight: '320px',
                borderTop: '1px solid #d1c400',
            }}>

                {/* Left — headline */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '64px clamp(40px, 6vw, 96px)',
                }}>
                    <p style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        color: '#adb940',
                        marginBottom: '18px',
                    }}>
                        Start Your Project
                    </p>

                    <div style={{ height: '1px', width: '36px', background: '#d1c400', marginBottom: '22px' }} />

                    <h2 style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: 'clamp(28px, 3.2vw, 46px)',
                        fontWeight: 600,
                        color: '#F8F6F1',
                        lineHeight: 1.08,
                        marginBottom: '0',
                    }}>
                        Ready to Build<br />
                        Something<br />
                        Extraordinary?
                    </h2>
                </div>

                {/* Gold vertical divider */}
                <div style={{ background: 'linear-gradient(to bottom, transparent, #d1c400 20%, #d1c400 80%, transparent)' }} />

                {/* Right — body + CTA */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '64px clamp(40px, 6vw, 96px)',
                }}>
                    <p style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '14px',
                        color: 'rgba(248,246,241,0.5)',
                        lineHeight: 1.9,
                        marginBottom: '36px',
                        maxWidth: '380px',
                    }}>
                        Every project begins with a conversation. Share your vision with us
                        and we'll respond within 24 hours with a personalised proposal
                        and free 3D preview.
                    </p>

                    {/* Two CTAs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>

                        {/* Primary */}
                        <Link
                            to="/get-a-quote"
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: '10px',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                padding: '16px 36px',
                                background: '#F8F6F1',
                                color: '#1A1C19',
                                border: '1px solid #F8F6F1',
                                textDecoration: 'none',
                                transition: 'all 0.3s',
                                display: 'inline-block',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.color = '#F8F6F1'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#F8F6F1'
                                e.currentTarget.style.color = '#1A1C19'
                            }}
                        >
                            Get a Free Quote
                        </Link>

                        {/* Ghost secondary */}
                        <Link
                            to="/shop"
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: '10px',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                fontWeight: 500,
                                color: 'rgba(248,246,241,0.45)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: 'color 0.3s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#d1c400'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,246,241,0.45)'}
                        >
                            <div style={{ height: '1px', width: '24px', background: 'currentColor' }} />
                            Browse the Shop
                        </Link>
                    </div>

                    {/* Trust line */}
                    <p style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '9px',
                        letterSpacing: '2.5px',
                        textTransform: 'uppercase',
                        color: 'rgba(248,246,241,0.2)',
                        marginTop: '28px',
                    }}>
                        No commitment required &nbsp;·&nbsp; Response within 24 hours
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ServicesCTA
