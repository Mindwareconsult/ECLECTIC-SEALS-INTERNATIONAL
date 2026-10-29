<?php
/**
 * The homepage template.
 *
 * @package Eclectic_Seals
 */

get_header();

$phone_1     = eclectic_seals_option( 'eclectic_seals_phone_1', '08027997172' );
$phone_2     = eclectic_seals_option( 'eclectic_seals_phone_2', '081600422514' );
$email       = eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' );
$address     = eclectic_seals_option( 'eclectic_seals_address', '11 Mungo Park Close, Asokoro, Abuja, Nigeria' );
$phone_1_tel = preg_replace( '/[^0-9+]/', '', '+234' . ltrim( $phone_1, '0' ) );
?>

<header class="hero">
  <div class="hero-bg" style="background-image:url('<?php echo eclectic_seals_image( 'hero_home.jpg' ); ?>');"></div>
  <svg class="hero-lines" viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg">
<path d="M0 600 L300 600 L300 400 L700 400 L700 650 L1000 650 L1000 250 L1400 250" stroke="#F5810D" stroke-width="1" fill="none"/>
<circle cx="300" cy="400" r="5" fill="none" stroke="#F5810D"/>
<circle cx="1000" cy="250" r="5" fill="none" stroke="#F5810D"/>
</svg>
  <div class="container hero-content">
    <div class="eyebrow" style="color:#F5810D;">Abuja's Premium Design &amp; Construction Studio</div>
    <h1>From Concept To <em>Blueprint To Reality.</em></h1>
    <p class="lead">From luxury interior design and bespoke furnishings to large-scale construction, renovation, landscaping, paint manufacturing, and property management, Eclectic Seals Int'l delivers timeless spaces built with excellence.</p>
    <div class="btn-group">
      <a href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>" class="btn btn-primary">Request a Free Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      <a href="<?php echo esc_url( home_url( '/projects/' ) ); ?>" class="btn btn-outline">View Our Projects</a>
    </div>
    <div class="hero-badges">
      <div class="hero-badges-label">Why Eclectic Seal</div>
      <div class="hero-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>10+ Years of Industry Experience</span></div>
      <div class="hero-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Quality Craftsmanship</span></div>
      <div class="hero-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Trusted Professionals</span></div>
      <div class="hero-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Premium Customer Service</span></div>
    </div>
  </div>
</header>

<section class="section" id="main">
  <div class="container split">
    <div class="split-media reveal-left">
      <img src="<?php echo eclectic_seals_image( 'p6.jpg' ); ?>" alt="Feature wall finishing detail by <?php bloginfo( 'name' ); ?>" loading="lazy">
    </div>
    <div class="reveal-right">
      <div class="eyebrow">Who We Are</div>
      <h2>Creating Exceptional Spaces That Inspire</h2>
      <p>Eclectic Seals Int'l specialises in delivering premium construction, luxury interiors, renovations, property solutions, and building supplies that combine functionality with timeless aesthetics. Every project we undertake, from a private residence in Asokoro to a corporate headquarters in Maitama, is shaped by the same discipline: precise planning, honest materials, and craftsmanship that holds up for decades.</p>
      <p>Our multidisciplinary team works across the full lifecycle of a property &mdash; design, build, finish, and manage &mdash; so our clients deal with a single, accountable partner from concept to handover.</p>
      <div class="btn-group">
        <a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="btn btn-outline-dark">About Us</a>
        <a href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>" class="btn btn-primary">Request Quote <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </div>
</section>

<section class="section section--light">
  <div class="container">
    <div class="section-head center">
      <div class="eyebrow" style="justify-content:center;">What We Do</div>
      <h2>Comprehensive Building &amp; Property Solutions</h2>
      <p>Everything you need, from concept to completion, under one accountable roof.</p>
    </div>
    <div class="bento stagger">
      <?php
      $services = eclectic_seals_get_service_modals();
		foreach ( $services as $i => $service ) :
		?>
      <div class="card reveal" style="--i:<?php echo (int) $i; ?>">
        <div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php echo $service['icon']; // phpcs:ignore WordPress.Security.EscapeOutput -- trusted, theme-bundled SVG markup, not user input. ?></svg></div>
        <h3><?php echo wp_kses_post( $service['title'] ); ?></h3>
        <p><?php echo esc_html( wp_strip_all_tags( $service['desc'] ) ); ?></p>
        <ul><?php foreach ( $service['bullets'] as $item ) : ?><li><?php echo esc_html( $item ); ?></li><?php endforeach; ?></ul>
        <button type="button" class="learn" data-open-modal="<?php echo esc_attr( $service['id'] ); ?>">Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_template_part( 'template-parts/sections/service-modals' ); ?>

<section class="section section--dark">
  <div class="container">
    <div class="section-head center">
      <div class="eyebrow" style="justify-content:center;">Why Eclectic Seals</div>
      <h2>Why Clients Choose Eclectic Seals Int&rsquo;l</h2>
    </div>
    <div class="grid-3 stagger">
      <?php
      $reasons = array(
			array( 'icon' => 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', 'title' => 'Experienced Professionals', 'text' => 'A multidisciplinary team of architects, engineers, and designers with decades of combined experience.' ),
			array( 'icon' => 'M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z', 'title' => 'Superior Craftsmanship', 'text' => "Every joint, finish and fixture is executed to a standard we'd accept in our own homes." ),
			array( 'icon' => 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'title' => 'Quality Materials', 'text' => 'We specify and, where possible, manufacture the materials that go into your project.' ),
			array( 'icon' => 'M12 7v5l3 3', 'circle' => true, 'title' => 'On-Time Delivery', 'text' => 'Realistic schedules, tracked weekly, and communicated to you at every stage.' ),
			array( 'icon' => 'M9 12h6M12 9v6', 'circle' => true, 'title' => 'Transparent Pricing', 'text' => 'Detailed quotations with no hidden costs and clear payment milestones.' ),
			array( 'icon' => 'M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z', 'title' => 'Customer Satisfaction', 'text' => 'A 95% client satisfaction rate built on listening first and building second.' ),
		);
		foreach ( $reasons as $i => $reason ) :
		?>
      <div class="feature-dark reveal" style="--i:<?php echo (int) $i; ?>">
        <div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php if ( ! empty( $reason['circle'] ) ) : ?><circle cx="12" cy="12" r="9"/><?php endif; ?><path d="<?php echo esc_attr( $reason['icon'] ); ?>"/></svg></div>
        <h3><?php echo esc_html( $reason['title'] ); ?></h3>
        <p><?php echo esc_html( $reason['text'] ); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head center">
      <div class="eyebrow" style="justify-content:center;">Portfolio</div>
      <h2>Featured Projects</h2>
      <p>A selection of recent work across interiors, renovation, construction and landscaping.</p>
    </div>
    <div class="grid-3 stagger">
      <?php
      $featured_projects = new WP_Query(
			array(
				'post_type'      => 'project',
				'posts_per_page' => 3,
				'orderby'        => 'date',
				'order'          => 'DESC',
			)
		);
		if ( $featured_projects->have_posts() ) :
			while ( $featured_projects->have_posts() ) :
				$featured_projects->the_post();
				get_template_part( 'template-parts/cards/project-card' );
			endwhile;
			wp_reset_postdata();
		endif;
		?>
    </div>
    <div class="text-center" style="margin-top:48px;"><a href="<?php echo esc_url( home_url( '/projects/' ) ); ?>" class="btn btn-outline-dark">View All Projects</a></div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="section-head center">
      <div class="eyebrow" style="justify-content:center;">How We Work</div>
      <h2>Our Process</h2>
    </div>
    <div class="process-track">
      <?php
      $steps = array(
			array( 'Initial Consultation', 'We listen to your brief, goals and budget.' ),
			array( 'Site Inspection', 'Our team assesses the site and constraints.' ),
			array( 'Design &amp; Planning', 'Concepts, drawings and material specs are developed.' ),
			array( 'Quotation', 'A transparent, itemised quote is issued.' ),
			array( 'Project Execution', 'Work proceeds to schedule with regular updates.' ),
			array( 'Quality Inspection', 'Every stage is checked against our quality standards.' ),
			array( 'Project Delivery', 'Handover, walkthrough and after-sales support.' ),
		);
		foreach ( $steps as $i => $step ) :
		?>
      <div class="process-step reveal-scale" style="--i:<?php echo (int) ( $i + 1 ); ?>">
        <div class="seal"><span><?php echo esc_html( sprintf( '%02d', $i + 1 ) ); ?></span></div>
        <h4><?php echo wp_kses_post( $step[0] ); ?></h4>
        <p><?php echo wp_kses_post( $step[1] ); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section--light">
  <div class="container">
    <div class="section-head center">
      <div class="eyebrow" style="justify-content:center;">Client Voices</div>
      <h2>What Our Clients Say</h2>
    </div>
  </div>
  <div class="testi-marquee">
    <div class="testi-track-marquee">
      <?php
      $marquee_testimonials = new WP_Query(
			array(
				'post_type'      => 'testimonial',
				'posts_per_page' => 6,
				'orderby'        => 'date',
				'order'          => 'DESC',
			)
		);
		$marquee_posts        = $marquee_testimonials->posts;
		// Repeat the same set once more for a seamless marquee loop, exactly as the original static markup did.
		$marquee_posts_looped = array_merge( $marquee_posts, $marquee_posts );
		foreach ( $marquee_posts_looped as $testimonial_post ) :
			setup_postdata( $testimonial_post );
			$role     = get_post_meta( $testimonial_post->ID, '_testimonial_role', true );
			$color    = get_post_meta( $testimonial_post->ID, '_testimonial_avatar_color', true );
			$initials = '';
			foreach ( array_slice( explode( ' ', $testimonial_post->post_title ), 0, 2 ) as $part ) {
				$initials .= mb_substr( $part, 0, 1 );
			}
			?>
      <div class="testi-card-mini">
        <div class="stars">&starf;&starf;&starf;&starf;&starf;</div>
        <p class="quote">&ldquo;<?php echo esc_html( $testimonial_post->post_content ); ?>&rdquo;</p>
        <div class="testi-person">
          <div class="avatar-initials" style="background:<?php echo esc_attr( $color ? $color : '#0F172A' ); ?>;"><?php echo esc_html( strtoupper( $initials ) ); ?></div>
          <div><div class="name"><?php echo esc_html( $testimonial_post->post_title ); ?></div><div class="role"><?php echo esc_html( $role ); ?></div></div>
        </div>
      </div>
      <?php endforeach; ?>
      <?php wp_reset_postdata(); ?>
    </div>
  </div>
</section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Let&rsquo;s Build Something Extraordinary Together',
		'text'    => "Tell us about your project and we'll respond within one business day with next steps.",
		'buttons' => array(
			array(
				'label' => 'Request Consultation',
				'url'   => home_url( '/request-quote/' ),
				'style' => 'primary',
			),
			array(
				'label' => 'Call Now',
				'url'   => 'tel:' . $phone_1_tel,
				'style' => 'outline',
			),
		),
	)
);
?>

<section class="section section--bg">
  <div class="container split">
    <div class="reveal-left">
      <div class="eyebrow">Get In Touch</div>
      <h2>Visit Or Reach Us Directly</h2>
      <p style="color:#5b6370;">Our head office is in Asokoro, Abuja. Reach out by phone, WhatsApp or email &mdash; we typically respond within a few hours.</p>
      <div style="margin-top:28px;">
        <div class="contact-info-row"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6"/></svg></div><div><strong>Office Address</strong><div><?php echo wp_kses_post( $address ); ?></div></div></div>
        <div class="contact-info-row"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2.1.6 3.1.7a2 2 0 0 1 1.6 2z"/></svg></div><div><strong>Phone &amp; WhatsApp</strong><div><?php echo esc_html( $phone_1 ); ?> &nbsp;|&nbsp; <?php echo esc_html( $phone_2 ); ?> &nbsp;|&nbsp; <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C10 9 9.5 7.7 9.3 7.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg> <?php echo esc_html( $phone_1 ); ?></div></div></div>
        <div class="contact-info-row"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></div><div><strong>Email</strong><div><?php echo esc_html( $email ); ?></div></div></div>
      </div>
      <div class="btn-group" style="margin-top:24px;"><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Contact Us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
    </div>
    <div class="reveal-right">
      <div style="border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-soft); aspect-ratio:4/3.4;">
        <iframe title="<?php bloginfo( 'name' ); ?> office location map" src="https://www.google.com/maps?q=Asokoro,Abuja,Nigeria&output=embed" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
