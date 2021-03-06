import React from 'react'
import PropTypes from 'prop-types'
import NextPageButton from './navigationComponents/NextPageButton'
import PagesIndicator from './navigationComponents/PagesIndicator'
import PreviousPageButton from './navigationComponents/PreviousPageButton'
import ZoomIn from './navigationComponents/ZoomIn'
import ZoomOut from './navigationComponents/ZoomOut'
import ResetZoom from './navigationComponents/ResetZoom'
import RotateLeft from './navigationComponents/RotateLeft'
import ResetRotation from './navigationComponents/ResetRotation'
import RotateRight from './navigationComponents/RotateRight'

const Navigation = ({
    page,
    pages,
    scale,
    defaultScale,
    maxScale,
    minScale,
    rotationAngle,
    hideZoom,
    hideRotation,
    css,
    handlePrevClick,
    handleNextClick,
    handleZoomIn,
    handleResetZoom,
    handleZoomOut,
    handleRotateLeft,
    handleResetRotation,
    handleRotateRight,
}) => {
    return (
        <div
            className={
                css.navbarWrapper ||
                'container box has-height-50 is-marginless has-padding-top-10 has-text-white has-background-black'
            }>
            <div className={css.navbarInner || 'columns is-gapless'}>
                <div className={css.zoomGroup || 'column is-4'}>
                    {hideZoom ? (
                        undefined
                    ) : (
                        <div
                            className={
                                css.zoomGroupInner || 'buttons are-small'
                            }>
                            <ZoomOut
                                scale={scale}
                                minScale={minScale}
                                css={css.zoomOutBtn}
                                handleZoomOut={handleZoomOut}
                            />
                            <ResetZoom
                                scale={scale}
                                defaultScale={defaultScale}
                                css={css.resetZoomBtn}
                                handleResetZoom={handleResetZoom}
                            />
                            <ZoomIn
                                scale={scale}
                                maxScale={maxScale}
                                css={css.zoomInBtn}
                                handleZoomIn={handleZoomIn}
                            />
                        </div>
                    )}
                </div>
                <div className={css.pageGroup || 'column is-4'}>
                    <div className={css.pageGroupInner || 'buttons are-small'}>
                        <PreviousPageButton
                            css={css.previousPageBtn}
                            page={page}
                            pages={pages}
                            handlePrevClick={handlePrevClick}
                        />
                        <PagesIndicator
                            css={css.pageIndicator}
                            page={page}
                            pages={pages}
                        />
                        <NextPageButton
                            css={css.nextPageBtn}
                            page={page}
                            pages={pages}
                            handleNextClick={handleNextClick}
                        />
                    </div>
                </div>
                <div className={css.rotateGroup || 'column is-4'}>
                    {hideRotation ? (
                        undefined
                    ) : (
                        <div
                            className={
                                css.rotateGroupInner || 'buttons are-small'
                            }>
                            <RotateLeft
                                css={css.rotateLeftBtn}
                                rotationAngle={rotationAngle}
                                handleRotateLeft={handleRotateLeft}
                            />
                            <ResetRotation
                                css={css.resetRotationBtn}
                                rotationAngle={rotationAngle}
                                handleResetRotation={handleResetRotation}
                            />
                            <RotateRight
                                css={css.rotateRightBtn}
                                rotationAngle={rotationAngle}
                                handleRotateRight={handleRotateRight}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Navigation.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    scale: PropTypes.number,
    defaultScale: PropTypes.number,
    maxScale: PropTypes.number,
    minScale: PropTypes.number,
    rotationAngle: PropTypes.number,
    hideZoom: PropTypes.bool,
    hideRotation: PropTypes.bool,

    css: PropTypes.shape({
        navbarWrapper: PropTypes.string,
        navbarInner: PropTypes.string,
        pageGroup: PropTypes.string,
        pageGroupInner: PropTypes.string,
        pages: PropTypes.string,
        pageIndicator: PropTypes.string,
        previousPageBtn: PropTypes.string,
        nextPageBtn: PropTypes.string,
        zoomGroup: PropTypes.string,
        zoomGroupInner: PropTypes.string,
        zoomOutBtn: PropTypes.string,
        resetZoomBtn: PropTypes.string,
        zoomInBtn: PropTypes.string,
        rotateGroup: PropTypes.string,
        rotateGroupInner: PropTypes.string,
        rotateLeftBtn: PropTypes.string,
        resetRotationBtn: PropTypes.string,
        rotateRightBtn: PropTypes.string,
    }),

    elements: PropTypes.shape({
        previousPageBtn: PropTypes.any,
        nextPageBtn: PropTypes.any,
        pages: PropTypes.any,
    }),

    handlePrevClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired,
    handleZoomIn: PropTypes.func.isRequired,
    handleResetZoom: PropTypes.func.isRequired,
    handleZoomOut: PropTypes.func.isRequired,
    handleRotateLeft: PropTypes.func.isRequired,
    handleResetRotation: PropTypes.func.isRequired,
    handleRotateRight: PropTypes.func.isRequired,
}

Navigation.defaultProps = {
    css: {},
    elements: {},
}

export default Navigation
