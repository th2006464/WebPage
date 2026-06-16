window.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('lang-switch');
    if (!switcher) return;

    const pageKey = document.body.getAttribute('data-page') || 'home';
    const translations = {
        home: {
            en: {
                pageTitle: 'FOXTANG | Institutional Holdings & Strategic Capital',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'Global Holding Strategy with Sovereign Discipline',
                heroSubtitle: 'FOXTANG is an institutional holdings platform that integrates discreet capital stewardship, cross-border governance and proprietary market intelligence for complex enterprise ecosystems.',
                heroBody: 'We serve leading principals with a focus on durability, operational excellence and secure ownership. Our mandates include strategic equity, infrastructure stewardship and next-generation technology participation.',
                btnBrief: 'Request Executive Brief', btnExplore: 'Explore Capabilities',
                visual1Title: 'Strategic Oversight', visual1Body: 'Institutional risk management, asset allocation and governance architectures built for multi-jurisdictional enterprise portfolios.',
                visual2Title: 'Resilient Infrastructure', visual2Body: 'Secure operational frameworks and infrastructure investments that enable long-term continuity, regulatory resilience and capital preservation.',
                tile1Title: 'Trusted Execution', tile1Body: 'We operate with precision, discretion and continuity, aligning institutional stakeholders around durable value creation.',
                tile2Title: 'Deep Expertise', tile2Body: 'Our framework blends regulatory insight, technical intelligence and capital structuring for high-conviction enterprise platforms.',
                tile3Title: 'Long-term Focus', tile3Body: 'Every structure is designed to withstand cycles, protect ownership and preserve generational optionality.',
                banner1Title: 'Institutional Scale', banner1Body: 'Global coverage across North America, Europe and Asia with a governance-first approach.',
                banner2Title: 'Investment Discipline', banner2Body: 'Each opportunity is evaluated through structural resilience, market defensibility and long-term alignment.',
                profile1Title: 'Corporate Stewardship', profile1Body: 'Active oversight, board-level advisory and risk governance for portfolio companies operating in critical sectors.',
                profile2Title: 'Private Participation', profile2Body: 'Direct investment and partnership structures that preserve confidentiality while enabling strategic capital deployment.',
                profile3Title: 'Technology Alignment', profile3Body: 'Investments in secure digital infrastructure, AI-enabled systems and sovereign-grade capabilities for next-generation operations.',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries, investor relations and strategic partnership requests, please use the institutional contact channel below.'
            },
            zh: {
                pageTitle: 'FOXTANG | 机构控股与战略资本',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '主权式纪律与全球控股策略',
                heroSubtitle: 'FOXTANG 是一家机构控股平台，整合隐私化资本托管、跨境治理和专有市场情报，服务复杂企业生态。',
                heroBody: '我们为核心投资人提供耐久性、运营卓越和安全所有权。我们的投资方向涵盖战略股权、基础设施托管与新一代技术参与。',
                btnBrief: '索取高管简报', btnExplore: '探索能力',
                visual1Title: '战略监督', visual1Body: '为多司法辖区企业组合构建机构级风险管理、资产配置与治理架构。',
                visual2Title: '韧性基础设施', visual2Body: '安全运营框架和基础设施投资，支持长期连续性、监管韧性与资本保值。',
                tile1Title: '可信执行', tile1Body: '我们以精准、审慎和持续性展开运作，使机构利益相关者围绕持久价值达成共识。',
                tile2Title: '深厚专业', tile2Body: '我们的框架融合监管洞察、技术情报与资本结构化，为高信念企业平台提供支持。',
                tile3Title: '长期视野', tile3Body: '每个架构都旨在抵御周期、保护所有权并保留跨代选择权。',
                banner1Title: '机构规模', banner1Body: '我们在北美、欧洲和亚洲提供覆盖，始终坚持治理优先。',
                banner2Title: '投资纪律', banner2Body: '每项机会均通过结构韧性、市场防御力和长期一致性进行评估。',
                profile1Title: '企业托管', profile1Body: '为关键行业的组合公司提供主动监督、董事会级咨询与风险治理。',
                profile2Title: '私募参与', profile2Body: '直接投资与合作结构在保密的同时实现战略资本部署。',
                profile3Title: '技术对齐', profile3Body: '投资于安全数字基础设施、AI 驱动系统和主权级能力的下一代平台。',
                contactTitle: '联系', contactBody: '如需机密咨询、投资者关系或战略合作，请使用下方机构联系渠道。'
            }
        },
        about: {
            en: {
                pageTitle: 'About FOXTANG | Institutional Holdings',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'About FOXTANG',
                heroSubtitle: 'FOXTANG is a strategic holdings platform focused on preserving institutional sovereignty through disciplined capital deployment, governance and infrastructure stewardship.',
                heroBody: 'We partner with principals and executive leadership to structure durable enterprise vehicles, maintain confidentiality and deliver alignment across jurisdictions. Our work is built for long-term stability rather than short-term momentum.',
                card1Title: 'Global Presence', card1Body: 'Operating across legal and financial centers in North America, Europe and Asia, we manage assets with a coordinated regional footprint.',
                card2Title: 'Governance First', card2Body: 'Governance systems and advisory protocols are embedded at every stage of investment, acquisition and portfolio management.',
                missionTitle: 'Our Mission', missionBody: 'To enable institutional leaders to capture long-term value with structures that are compliant, resilient and future-ready.',
                valuesTitle: 'Our Values', valuesBody: 'Discretion, precision and stewardship guide every decision. We prioritize continuity over volatility and integrity over exposure.',
                standardTitle: 'Our Standard', standardBody: 'Every engagement is governed by a rigorous risk framework, a clear operational plan and a commitment to operational excellence.',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries, investor relations and strategic partnership requests, please use the institutional contact channel below.'
            },
            zh: {
                pageTitle: '关于 FOXTANG | 机构控股',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '关于 FOXTANG',
                heroSubtitle: 'FOXTANG 是一家战略控股平台，致力于通过纪律化资本部署、治理与基础设施托管，守护机构主权。',
                heroBody: '我们与投资人及高管团队合作，构建耐久型企业载体，维护机密性并在多法域内实现协同。我们的工作以长期稳定为基准，而非短期动量。',
                card1Title: '全球布局', card1Body: '我们活跃于北美、欧洲和亚洲法律及金融中心，以协调的区域化布局管理资产。',
                card2Title: '治理优先', card2Body: '治理系统与咨询协议嵌入每个投资、收购与组合管理阶段。',
                missionTitle: '我们的使命', missionBody: '帮助机构领导者通过合规、韧性和面向未来的结构，实现长期价值捕获。',
                valuesTitle: '我们的价值', valuesBody: '谨慎、精准和守护是每项决策的核心。我们优先连续性而非波动性，优先诚信而非风险曝光。',
                standardTitle: '我们的标准', standardBody: '每一项合作都由严格风险框架、清晰运营计划和卓越执行承诺支撑。',
                contactTitle: '联系', contactBody: '如需机密咨询、投资者关系或战略合作，请使用下方机构联系渠道。'
            }
        },
        capabilities: {
            en: {
                pageTitle: 'Capabilities | FOXTANG',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'Core Capabilities', heroSubtitle: 'FOXTANG delivers a tightly integrated suite of services for enterprise holdings, governance and asset intelligence.',
                heroBody: 'From structured capital vehicles to advanced operational frameworks, our capabilities are tailored for stakeholders who require trust, privacy and institutional-grade execution.',
                card1Title: 'Capital Structuring', card1Body: 'Designing private vehicles, special purpose entities and equity frameworks that preserve control and meet regulatory expectations.',
                card2Title: 'Operational Governance', card2Body: 'Embedding board-grade advisory, compliance oversight and risk control in every corporate structure we support.',
                advisoryTitle: 'Private Advisory', advisoryBody: 'High-touch counsel for strategic transactions, cross-border structuring, and stakeholder alignment across complex ownership models.',
                managementTitle: 'Asset Management', managementBody: 'Discrete asset and portfolio management for entities that require active oversight with confidentiality and resilience.',
                technologyTitle: 'Technology Stewardship', technologyBody: 'Managed support for secure digital infrastructure, proprietary intelligence systems and next-gen operational platforms.',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries, investor relations and strategic partnership requests, please use the institutional contact channel below.'
            },
            zh: {
                pageTitle: '能力 | FOXTANG',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '核心能力', heroSubtitle: 'FOXTANG 提供紧密整合的企业控股、治理与资产情报服务。',
                heroBody: '从结构化资本载体到先进运营框架，我们的能力为需要信任、隐私和机构级执行力的利益方量身打造。',
                card1Title: '资本结构', card1Body: '设计私募载体、特殊目的实体和股权框架，以保留控制权并满足监管要求。',
                card2Title: '运营治理', card2Body: '在我们支持的每个公司结构中嵌入董事会级咨询、合规监督和风险控制。',
                advisoryTitle: '私募咨询', advisoryBody: '为战略交易、跨境结构与复杂所有权模型下的利益方协同提供高触点咨询。',
                managementTitle: '资产管理', managementBody: '为需要机密性和韧性的实体提供离散资产与组合管理。',
                technologyTitle: '技术托管', technologyBody: '为安全数字基础设施、专有情报系统和下一代运营平台提供管理支持。',
                contactTitle: '联系', contactBody: '如需机密咨询、投资者关系或战略合作，请使用下方机构联系渠道。'
            }
        },
        portfolio: {
            en: {
                pageTitle: 'Portfolio | FOXTANG',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'Portfolio Focus', heroSubtitle: 'FOXTANG’s portfolio reflects a curated mix of strategic equities, infrastructure and technology assets designed for sustained enterprise value.',
                heroBody: 'We prioritize opportunities that demonstrate regulatory resilience, strong governance, and the capacity to deliver stable returns across cycles.',
                card1Title: 'Strategic Equity', card1Body: 'Positions in mission-critical enterprises where ownership provides strategic control and long-term optionality.',
                card2Title: 'Infrastructure Assets', card2Body: 'Investments in secure infrastructure and operational platforms that support enterprise continuity and scalability.',
                assetTitle: 'Regulated Infrastructure', assetBody: 'Assets that underpin critical services with stable cash flow and structural protection.',
                techTitle: 'Technology Platforms', techBody: 'Holdings in advanced systems, secure digital networks and enterprise-grade technology services.',
                participationTitle: 'Private Participation', participationBody: 'Selective direct equity and co-investment partnerships that complement our core strategic holdings.',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries, investor relations and strategic partnership requests, please use the institutional contact channel below.'
            },
            zh: {
                pageTitle: '组合 | FOXTANG',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '组合聚焦', heroSubtitle: 'FOXTANG 的组合体现了战略股权、基础设施和技术资产的精选组合，旨在实现持续企业价值。',
                heroBody: '我们优先选择具有监管韧性、强治理能力和跨周期稳定回报能力的机会。',
                card1Title: '战略股权', card1Body: '在关键企业中的控股使所有权具备战略控制和长期选择权。',
                card2Title: '基础设施资产', card2Body: '在安全基础设施和运营平台上的投资支持企业连续性和可扩展性。',
                assetTitle: '监管基础设施', assetBody: '支撑关键服务的资产，具有稳定现金流和结构性保护。',
                techTitle: '技术平台', techBody: '持股涵盖先进系统、安全数字网络和企业级技术服务。',
                participationTitle: '私募参与', participationBody: '精选直接股权和共同投资合作，补充我们核心战略持股。',
                contactTitle: '联系', contactBody: '如需机密咨询、投资者关系或战略合作，请使用下方机构联系渠道。'
            }
        }
    };

    const pageTranslations = translations[pageKey];
    if (!pageTranslations) return;

    function setLanguage(lang) {
        const items = document.querySelectorAll('[data-i18n]');
        items.forEach(item => {
            const key = item.getAttribute('data-i18n');
            if (pageTranslations[lang][key]) {
                item.textContent = pageTranslations[lang][key];
            }
        });

        const titleKey = document.querySelector('[data-i18n-title]');
        if (titleKey) {
            document.title = pageTranslations[lang][titleKey.getAttribute('data-i18n-title')];
        } else if (pageTranslations[lang].pageTitle) {
            document.title = pageTranslations[lang].pageTitle;
        }

        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    switcher.addEventListener('click', function (event) {
        const button = event.target.closest('.lang-btn');
        if (!button) return;
        setLanguage(button.getAttribute('data-lang'));
    });

    setLanguage('en');
});
