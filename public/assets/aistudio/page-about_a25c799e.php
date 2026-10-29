<?php
/**
 * Template Name: About Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_about.jpg',
		'breadcrumb' => 'About Us',
		'eyebrow'    => 'Our Story',
		'title'      => 'Building Spaces That Inspire Excellence',
		'lead'       => "Eclectic Seals Int&rsquo;l is committed to transforming ideas into timeless spaces through innovative design, quality construction, premium finishing, and exceptional project delivery.",
		'buttons'    => array(
			array( 'label' => 'Our Services', 'url' => home_url( '/services/' ), 'style' => 'primary' ),
			array( 'label' => 'Request Consultation', 'url' => home_url( '/request-quote/' ), 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container split">
    <div class="split-media reveal-left"><img src="<?php echo eclectic_seals_image( 'team_site.jpg' ); ?>" alt="<?php bloginfo( 'name' ); ?> team reviewing plans on a project site" loading="lazy"></div>
    <div class="reveal-right">
      <div class="eyebrow">Our Story</div>
      <h2>From A Small Team To A Trusted Name In Abuja</h2>
      <?php if ( have_posts() ) : the_post(); ?>
        <?php if ( get_the_content() ) : ?>
          <div class="entry-content"><?php the_content(); ?></div>
        <?php else : ?>
          <p>Eclectic Seals Int&rsquo;l was founded on a simple conviction: that the buildings and interiors people live and work in shape the quality of their daily lives. What began as a small team of designers and builders in Abuja has grown into a full-service company spanning interior design, construction, renovation, landscaping, paint manufacturing, and property management.</p>
          <p>Every stage of that growth has been guided by the same standard &mdash; quality craftsmanship, honest communication, and a refusal to hand over anything less than our best work. We measure ourselves not by the number of projects completed, but by how many clients return to us for their next one.</p>
        <?php endif; ?>
        <?php rewind_posts(); ?>
      <?php endif; ?>
      <p style="font-family:var(--font-display); font-style:italic; color:var(--navy); font-size:20px;">&ldquo;We don&rsquo;t simply construct buildings &mdash; we create environments where people live, work, grow, and thrive.&rdquo;</p>
    </div>
  </div></section>

<section class="section section--light"><div class="container"><div class="grid-2 stagger">
  <div class="mv-card reveal" style="--i:0">
    <div class="mv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg></div>
    <h3>Our Mission</h3>
    <p>Provide innovative construction, interior design, and property solutions that exceed client expectations through quality craftsmanship, integrity, and professionalism.</p>
  </div>
  <div class="mv-card reveal" style="--i:1">
    <div class="mv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
    <h3>Our Vision</h3>
    <p>To become one of Nigeria&rsquo;s most respected construction and interior solutions companies, known for excellence, innovation, and sustainable development.</p>
  </div>
</div></div></section>

<section class="section"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">What Drives Us</div><h2>Our Core Values</h2></div>
  <div class="grid-4 stagger">
    <?php
    $values = array(
			array( 'icon' => 'M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z', 'title' => 'Integrity', 'text' => 'We do what we say, and price what we deliver.' ),
			array( 'icon' => 'M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z', 'title' => 'Quality', 'text' => 'Materials and workmanship built to outlast trends.' ),
			array( 'icon' => 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'title' => 'Innovation', 'text' => 'Modern methods applied to timeless design.' ),
			array( 'icon' => 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', 'title' => 'Professionalism', 'text' => 'Clear communication at every stage.' ),
			array( 'icon' => 'M20 6 9 17l-5-5', 'title' => 'Customer Satisfaction', 'text' => 'Your goals define what success looks like.' ),
			array( 'icon' => 'M9 12h6M12 9v6', 'circle' => true, 'title' => 'Transparency', 'text' => 'Itemised quotes, no hidden costs.' ),
			array( 'icon' => 'M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6', 'title' => 'Teamwork', 'text' => 'Architects, engineers and designers, aligned.' ),
			array( 'icon' => 'M12 7v5l3 3', 'circle' => true, 'title' => 'Excellence', 'text' => 'The standard we hold on every single project.' ),
		);
		foreach ( $values as $i => $value ) :
		?>
    <div class="card reveal" style="--i:<?php echo (int) $i; ?>">
      <div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php if ( ! empty( $value['circle'] ) ) : ?><circle cx="12" cy="12" r="9"/><?php endif; ?><path d="<?php echo esc_attr( $value['icon'] ); ?>"/></svg></div>
      <h3 style="font-size:18px;"><?php echo esc_html( $value['title'] ); ?></h3>
      <p style="margin:0;"><?php echo esc_html( $value['text'] ); ?></p>
    </div>
    <?php endforeach; ?>
  </div>
</div></section>

<section class="section section--dark"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Difference</div><h2>What Sets Us Apart</h2></div>
  <div class="grid-3 stagger">
    <?php
    $difference = array(
			array( 'icon' => 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', 'title' => 'Experienced Professionals', 'text' => 'A senior team with deep, cross-disciplinary project experience.' ),
			array( 'icon' => 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'title' => 'Premium Materials', 'text' => 'In-house sourcing and manufacturing keeps quality consistent.' ),
			array( 'icon' => 'M4 4h16v16H4zM4 9h16M9 9v11', 'title' => 'Creative Designs', 'text' => 'Concepts tailored to your site, brief and budget, never templated.' ),
			array( 'icon' => 'M12 7v5l3 3', 'circle' => true, 'title' => 'Timely Delivery', 'text' => 'Schedules tracked weekly and communicated proactively.' ),
			array( 'icon' => 'M9 12h6M12 9v6', 'circle' => true, 'title' => 'Competitive Pricing', 'text' => 'Transparent quotations that protect your budget.' ),
			array( 'icon' => 'M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z', 'title' => 'After-Sales Support', 'text' => 'We stay reachable long after handover.' ),
		);
		foreach ( $difference as $i => $item ) :
		?>
    <div class="feature-dark reveal" style="--i:<?php echo (int) $i; ?>">
      <div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php if ( ! empty( $item['circle'] ) ) : ?><circle cx="12" cy="12" r="9"/><?php endif; ?><path d="<?php echo esc_attr( $item['icon'] ); ?>"/></svg></div>
      <h3><?php echo esc_html( $item['title'] ); ?></h3>
      <p><?php echo esc_html( $item['text'] ); ?></p>
    </div>
    <?php endforeach; ?>
  </div>
</div></section>

<section class="section section--bg"><div class="container split">
    <div class="reveal-right" style="order:2;"><img src="<?php echo eclectic_seals_image( 'expertise.jpg' ); ?>" alt="Interior finishing detail on a residential project" style="border-radius:var(--radius-lg); box-shadow:var(--shadow-soft);" loading="lazy"></div>
    <div class="reveal-left">
      <div class="eyebrow">Expertise</div>
      <h2>Expertise Across Every Stage Of Construction</h2>
      <p style="color:#5b6370;">From first sketch to final handover, our teams cover the full spectrum of a build:</p>
      <div class="expertise-grid" style="margin-top:24px;">
        <?php
        $expertise = array(
				array( 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'Luxury Residential Projects' ),
				array( 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'Commercial Construction' ),
				array( 'M4 4h16v16H4zM4 9h16M9 9v11', 'Interior Design' ),
				array( 'M3 21l6-6M14 4l6 6-9 9H5v-6z', 'Interior Finishing' ),
				array( 'M14 2 4 12l3 3L17 5zM17 5l2 2M9 15l-4 4 3 1 1 3 4-4', 'Renovation' ),
				array( 'M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6', 'Property Management' ),
				array( 'M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10', 'Construction Supplies' ),
				array( 'M19 3H9a2 2 0 0 0-2 2v6l-3 7a2 2 0 0 0 2 3h9l3-9V5a2 2 0 0 0-2-2z', 'Paint Manufacturing' ),
			);
			foreach ( $expertise as $item ) :
			?>
        <div class="expertise-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="<?php echo esc_attr( $item[0] ); ?>"/></svg></div><span><?php echo esc_html( $item[1] ); ?></span></div>
        <?php endforeach; ?>
      </div>
    </div>
  </div></section>

<section class="section"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Leadership</div><h2>Meet Our Team</h2></div>
  <div class="grid-3 stagger">
    <?php
    $team = array(
			array( 'image' => 'team/md.jpg', 'name' => 'Engr. Onabe Edward', 'role' => 'Managing Director', 'text' => "Leads the company's strategic direction and oversees every project from concept through to delivery." ),
			array( 'image' => 'team/lead_designer.jpg', 'name' => 'Ohams Claribel', 'role' => 'Lead Interior Designer', 'text' => 'Specialises in space planning and luxury interior design services.' ),
			array( 'image' => 'team/project_manager.jpg', 'name' => 'Eddy Calyo', 'role' => 'Project Manager', 'text' => 'Oversees scheduling, project targets, supervision and team coordination.' ),
			array( 'image' => 'team/procurement.jpg', 'name' => 'Benjamin Okwoche', 'role' => 'Procurement &amp; Logistics Coordinator', 'text' => 'Sources materials and coordinates deliveries so every project stays fully stocked and on schedule.' ),
			array( 'image' => 'team/safety.jpg', 'name' => 'Chidi Ohams', 'role' => 'Safety Officer', 'text' => 'Oversees on-site safety standards and ensures every project is executed to code.' ),
		);
		foreach ( $team as $i => $member ) :
		?>
    <div class="card reveal text-center" style="--i:<?php echo (int) $i; ?>">
      <img src="<?php echo eclectic_seals_image( $member['image'] ); ?>" alt="<?php echo esc_attr( wp_strip_all_tags( $member['name'] . ', ' . $member['role'] . ' at ' . get_bloginfo( 'name' ) ) ); ?>" style="width:96px; height:96px; border-radius:50%; object-fit:cover; margin:0 auto 18px;" loading="lazy">
      <h3 style="font-size:19px;"><?php echo esc_html( $member['name'] ); ?></h3>
      <div class="tag-pill" style="margin-bottom:14px;"><?php echo wp_kses_post( $member['role'] ); ?></div>
      <p style="margin:0;"><?php echo wp_kses_post( $member['text'] ); ?></p>
    </div>
    <?php endforeach; ?>
  </div>
</div></section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Ready To Bring Your Vision To Life?',
		'text'    => "Book a free consultation and let's scope your project together.",
		'buttons' => array(
			array( 'label' => 'Request Consultation', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'View Our Projects', 'url' => home_url( '/projects/' ), 'style' => 'outline' ),
		),
	)
);

get_footer();
